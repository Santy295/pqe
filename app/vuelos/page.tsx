import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vuelos y Planes | PQE Vuelos en Parapente",
  description:
    "Descubre nuestras rutas de parapente en Quito: El Auqui – Lumbisí y Teleférico – La Carolina. Planes especiales: Cásate Conmigo y Vuelo de 15 Años.",
};

/* ─── DATA ─── */

const routes = [
  {
    tag: "MÁS POPULAR",
    tagColor: "bg-brand-green",
    title: "Ruta Cerro El Auqui – Lumbisí",
    subtitle: "Cumbayá, Quito",
    image: "/images/route-auqui.jpg",
    desc: "Un vuelo dinámico y escénico que despega desde el imponente cerro El Auqui, sobrevolando valles verdes y montañas hasta aterrizar suavemente en el acogedor valle de Lumbisí en Cumbayá.",
    details: [
      { label: "Tiempo en vuelo", value: "10 – 12 min" },
      { label: "Tipo", value: "Vuelo panoramico" },
      { label: "Incluye", value: "Fotos y video" },
      { label: "Nivel", value: "Todos los niveles" },
    ],
  },
  {
    tag: "AVENTURA",
    tagColor: "bg-brand-blue",
    title: "Ruta Teleférico – La Carolina",
    subtitle: "Pichincha – Centro-Norte de Quito",
    image: "/images/route-teleferico.jpg",
    desc: "Una aventura de gran altura con despegue desde las laderas del Teleférico (volcán Pichincha). Disfruta de vistas panorámicas espectaculares de la ciudad hasta aterrizar en el icónico parque La Carolina.",
    details: [
      { label: "Tiempo en vuelo", value: "17 – 20 min" },
      { label: "Tipo", value: "Vuelo de altura" },
      { label: "Incluye", value: "Fotos y video" },
      { label: "Nivel", value: "Todos los niveles" },
    ],
  },
];

const plans = [
  {
    tag: "ROMÁNTICO",
    tagColor: "bg-rose-500",
    title: "Cásate Conmigo",
    image: "/images/plan-casate.jpg",
    desc: "La propuesta de matrimonio perfecta. Coordina un vuelo biplaza con tu pareja y sorpréndela al aterrizar con letras gigantes en tierra, pétalos de flores y un momento que recordarán para siempre.",
    includes: [
      "La pareja vuela en simultaneo (cada uno con un piloto)",
      "Letras gigantes en tierra de \"Casate conmigo\" (visibles desde el aire)",
      "Ramo de rosas y vino o champagne en aterrizaje",
      "Fotografía y video profesional del momento",
    ],
  },
  {
    tag: "INOLVIBLE",
    tagColor: "bg-amber-500",
    title: "Vuelo de Quince Años",
    image: "/images/plan-quince.jpg",
    desc: "Celebra una fecha tan especial de la forma más única e inolvidable: ¡volando! Un vuelo exclusivo con sesión de fotos, banner aéreo personalizado y recuerdos que durarán toda la vida.",
    includes: [
      "Vuelo de celebración personalizado",
      "Banner aéreo de \"Feliz cumpleaños\"",
      "Sesión de fotos profesional en vuelo y tierra",
      "Video resumen del vuelo completo",
    ],
  },
];

const extras = [
  {
    icon: "type",
    title: "Letras Gigantes en Tierra",
    desc: "Mensajes personalizados visibles desde el aire. Ideal para propuestas, cumpleaños o cualquier ocasión especial. Creamos el mensaje que quieras con letras de gran formato en la zona de aterrizaje.",
  },
  {
    icon: "flag",
    title: "Banners Aéreos",
    desc: "Carteles personalizados que se despliegan durante el vuelo o al aterrizar. Perfecto para mensajes de impacto, felicitaciones o declaraciones memorables.",
  },
];

const faqs = [
  {
    q: "¿Es seguro volar en parapente?",
    a: "Absolutamente. Utilizamos equipos certificados internacionalmente y nuestros pilotos cuentan con más de 5 años de experiencia. Además, evaluamos las condiciones climáticas antes de cada vuelo.",
  },
  {
    q: "¿Necesito experiencia previa?",
    a: "No. Todos los vuelos son biplaza con un piloto profesional. Tú solo disfrutas del vuelo, nosotros nos encargamos del resto.",
  },
  {
    q: "¿Qué debo llevar?",
    a: "Ropa cómoda, zapatillas deportivas cerradas, gafas de sol y muchas ganas de volar. Nosotros proveemos todo el equipo de seguridad.",
  },
  {
    q: "¿Cuánto tiempo dura un vuelo?",
    a: "Depende de la ruta. La ruta El Auqui dura entre 20-30 minutos y la ruta del Teleférico entre 30-40 minutos, dependiendo de las condiciones del viento.",
  },
];

/* ─── PAGE ─── */

export default function VuelosPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0B132B] to-brand-green/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--brand-green)_0%,transparent_60%)] opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-green uppercase">
            Elige tu aventura
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white">
            Nuestros Vuelos y Planes
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/70 leading-relaxed">
            Dos rutas emblemáticas sobre Quito y paquetes especiales diseñados para tus
            momentos más importantes.
          </p>
        </div>
      </section>

      {/* ── Rutas de Vuelo ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              Rutas de vuelo
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Sobrevuela los Cielos de Quito
            </h2>
          </div>

          <div className="space-y-12">
            {routes.map((route, i) => (
              <div
                key={route.title}
                className={`flex flex-col ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-8 items-center`}
              >
                {/* Image */}
                <div className="relative w-full lg:w-1/2 h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={route.image}
                    alt={route.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:1024px)100vw,50vw"
                  />
                  <span className={`absolute top-4 left-4 rounded-lg ${route.tagColor} px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white`}>
                    {route.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-foreground">{route.title}</h3>
                  <p className="text-sm text-brand-blue font-medium">{route.subtitle}</p>
                  <p className="mt-4 text-foreground/70 leading-relaxed">{route.desc}</p>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {route.details.map((d) => (
                      <div key={d.label} className="rounded-xl bg-slate-50 p-3">
                        <p className="text-xs text-foreground/50 font-medium">{d.label}</p>
                        <p className="text-sm font-semibold text-foreground">{d.value}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/593998003003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:bg-brand-green-dark"
                  >
                    Reservar esta ruta
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planes Especiales ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              Paquetes experienciales
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Planes Especiales
            </h2>
            <p className="mt-2 text-foreground/60">
              Celebra tus momentos más importantes desde las alturas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.title}
                className="group rounded-2xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden transition hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${plan.title === "Vuelo de Quince Años" ? "object-[center_30%]" : ""}`}
                    sizes="(max-width:768px)100vw,50vw"
                  />
                  <span className={`absolute top-4 left-4 rounded-lg ${plan.tagColor} px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white`}>
                    {plan.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground">{plan.title}</h3>
                  <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{plan.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                        <svg className="mt-0.5 shrink-0 text-brand-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://wa.me/593998003003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:bg-brand-green-dark"
                  >
                    Reservar este plan
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Extras ── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              Personaliza tu experiencia
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Extras
            </h2>
            <p className="mt-2 text-foreground/60">
              Haz que tu vuelo sea aún más especial con experiencias personalizadas que sorprenderán desde el cielo.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 – Banner Aéreo */}
            <div className="group rounded-2xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden transition hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/extra-banner.jpg"
                  alt="Parapente volando con banner aéreo personalizado"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px)100vw,50vw"
                />
                <span className="absolute top-4 left-4 rounded-lg bg-brand-green px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Popular
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">Banner Aéreo</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  Haz que otro parapente despliegue un banner personalizado durante el vuelo para crear una sorpresa inolvidable.
                </p>
                <ul className="mt-5 space-y-2">
                  {[
                    "Mensajes personalizados",
                    '"Te Amo", "Feliz Cumpleaños"',
                    "Ideal para propuestas o celebraciones",
                    "Excelente para fotografías y video",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                      <svg className="mt-0.5 shrink-0 text-brand-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/593998003003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:bg-brand-green-dark"
                >
                  Agregar a mi vuelo
                </a>
              </div>
            </div>

            {/* Card 2 – Letras en Tierra */}
            <div className="group rounded-2xl bg-white shadow-md ring-1 ring-black/5 overflow-hidden transition hover:shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/images/extra-letras.jpg"
                  alt="Letras gigantes en tierra visibles desde el aire"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px)100vw,50vw"
                />
                <span className="absolute top-4 left-4 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                  Premium
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">Letras en Tierra</h3>
                <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                  Sorprende a esa persona especial con letras gigantes colocadas en el lugar de vuelo, visibles claramente desde el aire durante el recorrido en parapente.
                </p>
                <ul className="mt-5 space-y-2">
                  {[
                    "Letras gigantes personalizadas",
                    '"Feliz Cumpleaños", "Te Amo", "¿Quieres Casarte Conmigo?"',
                    "Visibles desde el aire",
                    "Ideal para fotografías y videos",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                      <svg className="mt-0.5 shrink-0 text-brand-green" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/593998003003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-green/25 transition hover:bg-brand-green-dark"
                >
                  Agregar a mi vuelo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-wide text-brand-blue uppercase">
              ¿Tienes dudas?
            </p>
            <h2 className="mt-2 text-3xl font-bold text-foreground">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-semibold text-foreground transition hover:text-brand-blue list-none">
                  {faq.q}
                  <svg className="shrink-0 ml-4 h-5 w-5 transition-transform group-open:rotate-180 text-foreground/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6,9 12,15 18,9" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-sm text-foreground/60 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── SVG Helpers ── */
function ExtraIcon({ name }: { name: string }) {
  switch (name) {
    case "type":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4,7 4,4 20,4 20,7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      );
    case "flag":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
          <line x1="4" y1="22" x2="4" y2="15" />
        </svg>
      );
    default:
      return null;
  }
}
