import Image from "next/image";
import Link from "next/link";

/* ─────────────────────── DATA ─────────────────────── */

const features = [
  {
    icon: "shield",
    title: "Seguridad Garantizada",
    desc: "Equipos certificados y protocolos internacionales.",
  },
  {
    icon: "pilot",
    title: "Pilotos Expertos",
    desc: "Más de 10 años de experiencia.",
  },
  {
    icon: "camera",
    title: "Fotos y Videos HD",
    desc: "Capturamos tu experiencia para que la recuerdes siempre.",
  },
  {
    icon: "mountain",
    title: "Vistas Increíbles",
    desc: "Sobrevolamos los paisajes más hermosos de la ciudad.",
  },
];

const flights = [
  {
    tag: "MÁS POPULAR",
    tagColor: "bg-brand-green",
    title: "Ruta El Auqui – Lumbisí",
    desc: "Despega del cerro El Auqui y aterriza en el valle de Lumbisí, Cumbayá.",
    details: ["20 – 30 min", "Vuelo dinámico", "Fotos incluidas"],
    image: "/route-auqui.jpg",
    href: "/vuelos",
  },
  {
    tag: "AVENTURA",
    tagColor: "bg-brand-blue",
    title: "Ruta Teleférico – La Carolina",
    desc: "Despega desde el Teleférico y aterriza en el parque La Carolina.",
    details: ["30 – 40 min", "Vuelo de altura", "Fotos y video"],
    image: "/route-teleferico.jpg",
    href: "/vuelos",
  },
  {
    tag: "ROMÁNTICO",
    tagColor: "bg-rose-500",
    title: "Cásate Conmigo",
    desc: "Propuesta de matrimonio inolvidable desde el aire con letras gigantes.",
    details: ["Vuelo coordinado", "Letras en tierra", "Foto/Video premium"],
    image: "/plan-casate.jpg",
    href: "/vuelos",
  },
  {
    tag: "PREMIUM",
    tagColor: "bg-amber-500",
    title: "Vuelo de Quince Años",
    desc: "Celebra tus 15 años con un vuelo espectacular y sesión de fotos.",
    details: ["Vuelo de celebración", "Banner aéreo", "Sesión de fotos"],
    image: "/plan-quince.jpg",
    href: "/vuelos",
  },
];

const galleryImages = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
];

const testimonials = [
  {
    stars: 5,
    text: "Una experiencia increíble, los pilotos son muy profesionales y te hacen sentir seguro en todo momento.",
    name: "María González",
  },
  {
    stars: 5,
    text: "Las vistas son espectaculares y las fotos quedaron brutales. ¡Totalmente recomendado!",
    name: "Andrés Herrera",
  },
  {
    stars: 5,
    text: "El mejor regalo que me he hecho. Volvería a hacerlo mil veces más.",
    name: "Laura Sánchez",
  },
];

/* ─────────────────────── PAGE ─────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero.jpg"
          alt="Vuelo en parapente sobre los valles andinos de Quito"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B]/80 via-[#0B132B]/50 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <p className="mb-4 inline-block rounded-full bg-brand-green/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-brand-green">
            VIVE LA EXPERIENCIA
          </p>
          <h1 className="max-w-2xl text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Siente la libertad{" "}
            <span className="text-brand-blue">en el cielo</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/80 leading-relaxed">
            Vuelos en parapente biplaza con pilotos certificados. Seguridad,
            adrenalina y vistas inolvidables.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/593998003003"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-whatsapp px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-whatsapp/25 transition hover:brightness-110"
            >
              <WhatsAppMini />
              Reservar por WhatsApp
            </a>
            <Link
              href="/galeria"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              <PlayIcon />
              Ver galería
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES BAR ── */}
      <section className="relative z-20 -mt-20 mb-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                  <FeatureIcon name={f.icon} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/60">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLIGHTS / PLANS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
                Elige tu aventura
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
                Nuestros Vuelos
              </h2>
              <p className="mt-2 text-foreground/60">
                Experiencias únicas sobre los cielos de Quito. Elige tu ruta ideal.
              </p>
            </div>
            <Link
              href="/vuelos"
              className="text-sm font-semibold text-brand-blue hover:underline whitespace-nowrap"
            >
              Ver todos los vuelos →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {flights.map((fl) => (
              <Link
                key={fl.title}
                href={fl.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={fl.image}
                    alt={fl.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw"
                  />
                  <span className={`absolute top-3 left-3 rounded-lg ${fl.tagColor} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white`}>
                    {fl.tag}
                  </span>
                </div>
                {/* Info */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-bold text-foreground">{fl.title}</h3>
                  <p className="mt-1 text-sm text-foreground/60 leading-relaxed">{fl.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {fl.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-foreground/70">
                        <span className="h-1 w-1 rounded-full bg-brand-green" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5">
                    <span className="inline-flex w-full items-center justify-center rounded-xl bg-brand-green/10 px-4 py-2.5 text-sm font-semibold text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
                      Reservar ahora
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXTRAS ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Extras
            </h2>
            <p className="mt-2 text-foreground/60">
              Haz que tu vuelo sea aún más especial con experiencias personalizadas que sorprenderán desde el cielo.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
            {/* Card 1 – Banner Aéreo */}
            <Link
              href="/vuelos"
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/extra-banner.jpg"
                  alt="Parapente volando con banner aéreo personalizado"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px)100vw,50vw"
                />
                <span className="absolute top-3 left-3 rounded-lg bg-brand-green px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-foreground">Banner Aéreo</h3>
                <p className="mt-1 text-sm text-foreground/60 leading-relaxed">
                  Haz que otro parapente despliegue un banner personalizado durante el vuelo para crear una sorpresa inolvidable.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {[
                    'Mensajes de "Te Amo" y "Feliz Cumpleaños"',
                    "Ideal para propuestas y celebraciones",
                    "Excelente para fotografías y video",
                  ].map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-foreground/70">
                      <span className="h-1 w-1 rounded-full bg-brand-green" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>

            {/* Card 2 – Letras en Tierra */}
            <Link
              href="/vuelos"
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5 transition hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/extra-letras.jpg"
                  alt="Letras gigantes en tierra visibles desde el aire"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:640px)100vw,50vw"
                />
                <span className="absolute top-3 left-3 rounded-lg bg-amber-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Premium
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-foreground">Letras en Tierra</h3>
                <p className="mt-1 text-sm text-foreground/60 leading-relaxed">
                  Sorprende a esa persona especial con letras gigantes colocadas en el lugar de vuelo, visibles claramente desde el aire durante el recorrido en parapente.
                </p>
                <ul className="mt-4 space-y-1.5">
                  {[
                    "Letras gigantes personalizadas",
                    'Mensajes como "Feliz Cumpleaños", "Te Amo" y "Cásate Conmigo"',
                    "Visibles desde el aire",
                    "Ideal para fotografías y videos",
                    "Tomas con dron incluidas sin costo adicional",
                  ].map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-foreground/70">
                      <span className="h-1 w-1 rounded-full bg-brand-green" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/3">
              <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
                Galería
              </p>
              <h2 className="mt-2 text-3xl font-bold text-foreground">
                Momentos Inolvidables
              </h2>
              <p className="mt-3 text-foreground/60 leading-relaxed">
                Revive las mejores experiencias en el cielo.
              </p>
              <Link
                href="/galeria"
                className="mt-6 inline-flex items-center gap-2 rounded-xl border border-foreground/20 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-white"
              >
                Ver galería completa
              </Link>
            </div>
            <div className="lg:w-2/3 flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative shrink-0 w-40 sm:w-48 h-56 sm:h-64 snap-center overflow-hidden rounded-2xl"
                >
                  <Image
                    src={img}
                    alt={`Galería PQE ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="200px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              Lo que dicen nuestros clientes
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Experiencias que hablan por sí solas
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-black/5"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue/10 text-sm font-bold text-brand-blue">
                    {t.name.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-foreground">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-[#0B132B] py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/80 to-brand-blue/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            ¿Listo para volar?
          </h2>
          <p className="mt-4 text-white/70 max-w-md mx-auto">
            Reserva ahora y vive la libertad desde otra perspectiva.
          </p>
          <a
            href="https://wa.me/593998003003"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-brand-whatsapp px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-whatsapp/25 transition hover:brightness-110"
          >
            <WhatsAppMini />
            Reservar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}

/* ─────────── Inline SVG Helpers ─────────── */

function WhatsAppMini() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "shield":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "pilot":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="10" cy="7" r="4" />
          <path d="M17.5 7h.5a2 2 0 012 2v0a2 2 0 01-2 2h-.5" />
        </svg>
      );
    case "camera":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    case "mountain":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
        </svg>
      );
    default:
      return null;
  }
}
