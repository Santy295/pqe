export interface GoogleReview {
  authorName: string;
  authorPhoto: string;
  rating: number;
  relativeTime: string;
  text: string;
}

export interface GoogleReviewsData {
  reviews: GoogleReview[];
  averageRating: number;
  totalReviews: number;
}

/**
 * Fetches reviews from Google Places API (New).
 * Called on the server side only — API key is never exposed to the client.
 * Results are cached for 24 hours via next revalidate.
 */
export async function fetchGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("[Google Reviews] Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID");
    return null;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=es&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!res.ok) {
      console.error("[Google Reviews] API response not OK:", res.status);
      return null;
    }

    const data = await res.json();

    if (data.status !== "OK" || !data.result) {
      console.error("[Google Reviews] API status:", data.status);
      return null;
    }

    const result = data.result;

    const reviews: GoogleReview[] = (result.reviews || [])
      .slice(0, 6)
      .map((r: Record<string, unknown>) => ({
        authorName: r.author_name as string,
        authorPhoto: (r.profile_photo_url as string) || "",
        rating: r.rating as number,
        relativeTime: r.relative_time_description as string,
        text: r.text as string,
      }));

    return {
      reviews,
      averageRating: result.rating || 0,
      totalReviews: result.user_ratings_total || 0,
    };
  } catch (error) {
    console.error("[Google Reviews] Fetch error:", error);
    return null;
  }
}
