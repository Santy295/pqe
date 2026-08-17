import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Paquetes y Servicios | PQE Vuelos en Parapente",
  description: "Paquetes y experiencias especiales para hacer de tu vuelo un recuerdo inolvidable.",
};

const packages = [
  {
    category: "EXPERIENCIA ROMÁNTICA",
    name: "¿QUIERES SER MI NOVI@?",
    phrase: "Una pregunta especial merece un escenario inolvidable.",
    indicator: "PARA 2 PERSONAS",
    desc: "Sorprende a esa persona especial con una experiencia diseñada para transformar una propuesta romántica en un recuerdo para toda la vida.",
    image: "/images/extra-letras.jpg",
    highlights: [
      "2 vuelos en parapente",
      "Letras gigantes “¿QUIERES SER MI NOVI@?”",
      "Video con dron",
      "5 fotografías con dron",
    ],
    detailsTitle: "Lo que hace especial esta experiencia",
    details: (
      <div className="space-y-4">
        <div>
          <p className="font-bold text-foreground text-sm">Letras gigantes en tierra</p>
          <p className="text-xs text-foreground/70 mt-0.5">Mensaje: “¿QUIERES SER MI NOVI@?”</p>
        </div>
        <div>
          <p className="font-bold text-foreground text-sm">Video con dron</p>
          <p className="text-xs text-foreground/70 mt-0.5">Registro aéreo del momento especial.</p>
        </div>
        <div>
          <p className="font-bold text-foreground text-sm">5 fotografías con dron</p>
          <p className="text-xs text-foreground/70 mt-0.5">Fotografías aéreas para conservar el recuerdo.</p>
        </div>
        <p className="text-[11px] text-foreground/50 italic mt-3 pt-3 border-t border-black/5">
          Los beneficios promocionales especiales de esta experiencia aplican de martes a jueves.
        </p>
      </div>
    ),
    whatsappMessage: "Hola, estoy interesado/a en el paquete “¿QUIERES SER MI NOVI@?” y quisiera recibir información para reservar.",
  },
  {
    category: "EXPERIENCIA DE CUMPLEAÑOS",
    name: "VIP BIRTHDAY FLIGHT",
    phrase: "Este cumpleaños se celebra en el cielo.",
    indicator: "PARA 1 PERSONA",
    desc: "Convierte tu cumpleaños en una experiencia diferente, llena de adrenalina, vistas increíbles y recuerdos que durarán mucho más que un día.",
    image: "/images/plan-quince.jpg", 
    highlights: [
      "Paquete especial para 1 persona",
      "Valla “FELIZ CUMPLEAÑOS”",
      "Regalo para el cumpleañero",
      "Acceso a instalaciones privadas",
    ],
    detailsTitle: "Lo que hace especial esta experiencia",
    details: (
      <div className="space-y-4">
        <div>
          <p className="font-bold text-foreground text-sm">Valla “FELIZ CUMPLEAÑOS”</p>
          <p className="text-xs text-foreground/70 mt-0.5">Preparada como elemento especial para fotografías y recuerdos del cumpleaños.</p>
        </div>
        <div>
          <p className="font-bold text-foreground text-sm">Regalo para el cumpleañero</p>
          <p className="text-xs text-foreground/70 mt-0.5 mb-2">Presentando la cédula, el cumpleañero recibe uno de los siguientes productos, según disponibilidad de stock:</p>
          <ul className="text-xs text-foreground/80 font-semibold space-y-1 pl-1">
            <li>• Jarro PQE</li>
            <li>• Gorra PQE</li>
            <li>• Buff PQE</li>
          </ul>
        </div>
        <p className="text-[11px] text-foreground/50 italic mt-3 pt-3 border-t border-black/5">
          Regalo sujeto a disponibilidad de stock.
        </p>
      </div>
    ),
    whatsappMessage: "Hola, estoy interesado/a en el paquete “VIP Birthday Flight” para 1 persona y quisiera recibir información para reservar.",
  },
  {
    category: "FAMILIA Y AMIGOS",
    name: "SQUAD AIR EXPERIENCE",
    phrase: "Las mejores historias se viven juntos.",
    indicator: "DESDE 4 PERSONAS",
    desc: "Reúne a tu familia o a tu grupo de amigos y compartan una experiencia diferente. Un día para salir de la rutina, conquistar el cielo y llevarse una historia que todos recordarán.",
    image: "/images/gallery/img1.jpg", 
    highlights: [
      "Desde 4 personas",
      "Desayuno para todos",
      "Letras gigantes en tierra",
      "Experiencia grupal",
    ],
    detailsTitle: "Beneficios especiales para el grupo",
    details: (
      <div className="space-y-4">
        <div>
          <p className="font-bold text-foreground text-sm">Desayuno para todos</p>
          <p className="text-xs text-foreground/70 mt-0.5">Incluido como parte de la experiencia grupal.</p>
        </div>
        <div>
          <p className="font-bold text-foreground text-sm">Letras gigantes en tierra</p>
          <p className="text-xs text-foreground/70 mt-0.5 mb-2">Permite seleccionar entre las opciones actualmente disponibles:</p>
          <div className="flex flex-wrap gap-1.5">
            <span className="px-2 py-1 bg-black/5 text-foreground/80 text-[10px] rounded border border-black/5 font-semibold tracking-wide">TE AMO</span>
            <span className="px-2 py-1 bg-black/5 text-foreground/80 text-[10px] rounded border border-black/5 font-semibold tracking-wide">FELIZ CUMPLEAÑOS</span>
            <span className="px-2 py-1 bg-black/5 text-foreground/80 text-[10px] rounded border border-black/5 font-semibold tracking-wide">PAPÁ</span>
            <span className="px-2 py-1 bg-black/5 text-foreground/80 text-[10px] rounded border border-black/5 font-semibold tracking-wide">MAMÁ</span>
            <span className="px-2 py-1 bg-black/5 text-foreground/80 text-[10px] rounded border border-black/5 font-semibold tracking-wide">¿QUIERES SER MI NOVI@?</span>
          </div>
        </div>
        <p className="text-[12px] font-bold text-brand-turquoise text-center mt-4 pt-4 border-t border-black/5">
          Porque algunos recuerdos no se viven solos: se comparten en el cielo.
        </p>
      </div>
    ),
    whatsappMessage: "Hola, estoy interesado/a en el paquete “Squad Air Experience” para familia o amigos y quisiera recibir información para reservar.",
  },
];

const commonBenefits = [
  {
    title: "CERTIFICADO DE VUELO",
    desc: "Un recuerdo de tu experiencia en parapente.",
  },
  {
    title: "INSTALACIONES PRIVADAS",
    desc: "Acceso al simulador de vuelo, alas de neón, columpio gigante, triciclo al infinito, miradores y otros espacios de PQE.",
  },
  {
    title: "TRASLADO DE RETORNO",
    desc: "Regreso al aeródromo después de la experiencia.",
  },
  {
    title: "KIT DE HIDRATACIÓN",
    desc: "Bebida, galleta y caramelos.",
  },
  {
    title: "PILOTOS CERTIFICADOS",
    desc: "Más de 15 años de experiencia.",
  },
  {
    title: "EQUIPOS 2026",
    desc: "Sillas con airbag y paracaídas de emergencia.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-footer-bg to-brand-turquoise-darker/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--brand-turquoise)_0%,transparent_60%)] opacity-15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-turquoise uppercase">
            PAQUETES ESPECIALES
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            Haz que tu vuelo se convierta en un recuerdo inolvidable
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-white/70 leading-relaxed text-lg">
            Celebra el amor, un cumpleaños o una aventura con amigos desde una perspectiva diferente. Elige el paquete que mejor se adapte a tu momento y nosotros nos encargamos de hacer que la experiencia sea inolvidable.
          </p>
        </div>
      </section>

      {/* ── 2. Tarjetas de Paquetes ── */}
      <section className="py-20 bg-background-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 sm:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              ¿Y cuál es tu plan perfecto?
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div key={pkg.name} className="flex flex-col bg-white rounded-[2rem] shadow-md ring-1 ring-black/5 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                {/* Fotografía */}
                <div className="relative h-64 sm:h-72 w-full bg-slate-100">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                
                <div className="flex flex-col flex-1 p-6 sm:p-8">
                  {/* Categoría */}
                  <p className="text-[11px] font-bold tracking-widest text-brand-turquoise uppercase mb-2">
                    {pkg.category}
                  </p>
                  
                  {/* Nombre */}
                  <h2 className="text-2xl font-bold text-foreground leading-tight">
                    {pkg.name}
                  </h2>
                  
                  {/* Frase emocional */}
                  <p className="mt-2 text-sm font-medium italic text-foreground/60">
                    {pkg.phrase}
                  </p>
                  
                  {/* Cantidad de personas (Indicador) */}
                  <div className="mt-5 inline-block">
                    <span className="inline-flex items-center rounded-lg bg-foreground/5 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-foreground">
                      {pkg.indicator}
                    </span>
                  </div>
                  
                  {/* Descripción breve */}
                  <p className="mt-5 text-sm text-foreground/70 leading-relaxed">
                    {pkg.desc}
                  </p>
                  
                  {/* Destacar visualmente (3-4 beneficios) */}
                  <ul className="mt-6 space-y-3">
                    {pkg.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-3 text-sm font-bold text-foreground">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="mt-0.5">{hl}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Detalle especial del paquete */}
                  <div className="mt-8 rounded-2xl bg-slate-50 p-6 ring-1 ring-black/5">
                    <h3 className="text-xs font-bold text-brand-turquoise uppercase tracking-wider mb-4 pb-3 border-b border-black/5">
                      {pkg.detailsTitle}
                    </h3>
                    {pkg.details}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-8">
                    <a
                      href={`https://wa.me/593998003003?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-foreground/20 px-6 py-3.5 text-sm font-bold text-foreground transition hover:bg-foreground hover:text-white"
                    >
                      Reservar por WhatsApp
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 3. Beneficios Comunes ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Todo lo que hace diferente tu experiencia PQE
            </h2>
            <p className="mt-4 text-lg text-foreground/70 leading-relaxed">
              Nuestros paquetes incluyen mucho más que un vuelo. Cada experiencia está pensada para que disfrutes PQE desde que llegas hasta que vuelves a tierra.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {commonBenefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col border-l-2 border-brand-turquoise/20 pl-5">
                <h3 className="text-sm font-bold tracking-widest text-brand-turquoise uppercase">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
