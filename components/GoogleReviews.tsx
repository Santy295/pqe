import Image from "next/image";
import type { GoogleReview } from "@/lib/google-reviews";

/* ─── Google "G" logo SVG ─── */
function GoogleLogo() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

/* ─── Star rating component ─── */
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Main component ─── */
interface GoogleReviewsSectionProps {
  reviews: GoogleReview[];
  averageRating: number;
  totalReviews: number;
}

export default function GoogleReviewsSection({
  reviews,
  averageRating,
  totalReviews,
}: GoogleReviewsSectionProps) {
  return (
    <section className="py-20 bg-brand-turquoise-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-brand-turquoise uppercase">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">
            Experiencias que hablan por sí solas
          </h2>
          {/* Average rating summary */}
          <div className="mt-4 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-sm ring-1 ring-black/5">
            <GoogleLogo />
            <span className="text-lg font-bold text-foreground">{averageRating.toFixed(1)}</span>
            <Stars rating={Math.round(averageRating)} />
            <span className="text-xs text-foreground/50">
              ({totalReviews} reseñas en Google)
            </span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.authorName + r.relativeTime}
              className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5 transition hover:shadow-lg"
            >
              {/* Stars */}
              <Stars rating={r.rating} />

              {/* Review text */}
              <p className="mt-4 text-sm leading-relaxed text-foreground/70 line-clamp-4">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 flex items-center gap-3">
                {r.authorPhoto ? (
                  <Image
                    src={r.authorPhoto}
                    alt={r.authorName}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-turquoise/10 text-sm font-bold text-brand-turquoise">
                    {r.authorName.charAt(0)}
                  </div>
                )}
                <div>
                  <span className="block text-sm font-medium text-foreground">
                    {r.authorName}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-foreground/50">
                    <GoogleLogo />
                    {r.relativeTime}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button to Google Maps */}
        <div className="mt-10 text-center">
          <a
            href="https://maps.app.goo.gl/mtzPzetr9ccpC68b6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white"
          >
            <GoogleLogo />
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Fallback when API is unavailable ─── */
export function GoogleReviewsFallback() {
  return (
    <section className="py-20 bg-brand-turquoise-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-wide text-brand-turquoise uppercase">
            Lo que dicen nuestros clientes
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground">
            Experiencias que hablan por sí solas
          </h2>
        </div>
        <div className="text-center rounded-2xl bg-white p-10 shadow-md ring-1 ring-black/5">
          <p className="text-foreground/60 text-sm">
            Descubre lo que nuestros clientes opinan sobre nosotros.
          </p>
          <a
            href="https://maps.app.goo.gl/mtzPzetr9ccpC68b6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-turquoise-dark px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-brand-turquoise-darker"
          >
            <GoogleLogo />
            Ver reseñas en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
