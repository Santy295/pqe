import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios e Instalaciones | PQE Vuelos en Parapente",
  description: "Descubre experiencias, espacios y servicios diseñados para disfrutar PQE antes, durante y después de tu vuelo.",
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

const spots = [
  { name: "Alas de Neón", image: "/images/instalaciones/inst-6.jpg", desc: "Un spot vibrante para capturar la esencia de tu vuelo." },
  { name: "Letras de Amor", image: "/images/instalaciones/inst-8.jpg", desc: "El escenario perfecto para fotos especiales." },
  { name: "Columpios con Vista a Quito", image: "/images/instalaciones/inst-10.jpg", desc: "Siente la libertad mientras contemplas la ciudad." },
  { name: "Triciclo al cielo", image: "/images/instalaciones/inst-13.jpg", desc: "Una fotografía divertida y original antes de volar." },
  { name: "Áreas de Picnic", image: "/images/instalaciones/inst-7.jpg", desc: "Espacios tranquilos diseñados para compartir al aire libre." },
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            Mucho más que volar
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-white/70 leading-relaxed text-lg">
            Descubre experiencias, espacios y servicios diseñados para disfrutar PQE antes, durante y después de tu vuelo.
          </p>
        </div>
      </section>

      {/* ── 2. Navegación Interna ── */}
      <div className="sticky top-[72px] sm:top-[88px] z-40 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center gap-6 sm:gap-10 overflow-x-auto py-4 text-sm font-bold tracking-wide text-foreground/80 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <a href="#paquetes" className="hover:text-brand-turquoise transition-colors whitespace-nowrap">Paquetes</a>
            <span className="text-foreground/20">·</span>
            <a href="#instalaciones" className="hover:text-brand-turquoise transition-colors whitespace-nowrap">Instalaciones</a>
            <span className="text-foreground/20">·</span>
            <a href="#spots" className="hover:text-brand-turquoise transition-colors whitespace-nowrap">Spots</a>
            <span className="text-foreground/20">·</span>
            <a href="#camping" className="hover:text-brand-turquoise transition-colors whitespace-nowrap">Camping</a>
          </nav>
        </div>
      </div>

      {/* ── 3. Paquetes y Experiencias ── */}
      <section id="paquetes" className="scroll-mt-[150px] py-24 bg-background-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Paquetes y Experiencias
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Combina el vuelo con experiencias especiales diseñadas para celebrar y compartir momentos inolvidables.
            </p>
          </div>

          <div className="mb-12 sm:mb-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              ¿Y cuál es tu plan perfecto?
            </h3>
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
                    <h4 className="text-xs font-bold text-brand-turquoise uppercase tracking-wider mb-4 pb-3 border-b border-black/5">
                      {pkg.detailsTitle}
                    </h4>
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

      {/* ── 4. Instalaciones ── */}
      <section id="instalaciones" className="scroll-mt-[150px] py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Instalaciones
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Descubre los espacios que hemos preparado para hacer de tu visita una experiencia cómoda y completa.
            </p>
          </div>

          {/* Cafeteria Hero Block */}
          <div className="mb-20 rounded-[2rem] overflow-hidden bg-slate-50 ring-1 ring-black/5 flex flex-col lg:flex-row shadow-sm">
            <div className="relative w-full lg:w-[55%] h-72 lg:h-auto min-h-[300px]">
              <Image src="/images/instalaciones/inst-1.jpg" alt="Cafetería PQE" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            </div>
            <div className="w-full lg:w-[45%] p-8 sm:p-12 flex flex-col justify-center">
              <p className="text-xs font-bold tracking-widest text-brand-turquoise uppercase mb-3">Principal</p>
              <h3 className="text-3xl font-bold text-foreground mb-4">Cafetería</h3>
              <p className="text-foreground/70 leading-relaxed text-lg">
                Un espacio pensado para disfrutar antes y después del vuelo, donde pasajeros y acompañantes pueden descansar, compartir y disfrutar del entorno.
              </p>
            </div>
          </div>

          {/* Other Facilities Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
             {[
               { title: "Área de Recepción", img: "/images/instalaciones/inst-0.png", desc: "El punto de encuentro donde te damos la bienvenida." },
               { title: "Área de Espera", img: "/images/instalaciones/inst-5.jpg", desc: "Zonas de descanso antes y después de tu aventura." },
               { title: "Miradores", img: "/images/instalaciones/inst-11.jpg", desc: "Espacios con vistas espectaculares del valle y la ciudad." }
             ].map(fac => (
                <div key={fac.title} className="flex flex-col bg-white rounded-2xl shadow-sm ring-1 ring-black/5 overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="relative h-56 w-full"><Image src={fac.img} alt={fac.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" /></div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-foreground mb-2">{fac.title}</h4>
                    <p className="text-sm text-foreground/70">{fac.desc}</p>
                  </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── 5. Spots ── */}
      <section id="spots" className="scroll-mt-[150px] py-24 bg-background-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Spots
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Descubre rincones visuales únicos dentro de nuestras instalaciones, ideales para capturar recuerdos increíbles.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
             {spots.map(s => (
                <div key={s.name} className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:-translate-y-1">
                   <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                     <Image src={s.image} alt={s.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 640px) 50vw, 25vw" />
                   </div>
                   <div className="flex flex-col p-4 flex-1">
                      <h4 className="text-sm font-bold text-foreground mb-1.5">{s.name}</h4>
                      <p className="text-xs text-foreground/60 leading-relaxed">{s.desc}</p>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── 6. Zonas de Camping ── */}
      <section id="camping" className="scroll-mt-[150px] py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Zonas de Camping
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Acampa bajo las estrellas y despierta en plena naturaleza. Ofrecemos dos ubicaciones para vivir una noche diferente.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Zona Despegue */}
            <div className="flex flex-col bg-white rounded-[2rem] shadow-sm ring-1 ring-black/5 overflow-hidden transition hover:shadow-md">
              <div className="relative h-64 w-full"><Image src="/images/gallery/img9.jpg" alt="Camping en zona de despegue" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
              <div className="p-8 sm:p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">Camping en zona de despegue</h3>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Una ubicación privilegiada en lo alto del cerro para disfrutar de atardeceres y amaneceres únicos con vista a toda la ciudad y al horizonte.
                </p>
                <div className="space-y-4 mt-auto">
                   <div className="p-5 bg-slate-50 rounded-xl ring-1 ring-black/5">
                      <p className="text-sm font-bold text-foreground mb-1.5">Servicios disponibles</p>
                      <p className="text-xs text-foreground/70">Zonas niveladas, acceso a baños y área de fogata.</p>
                   </div>
                   <div className="p-5 bg-slate-50 rounded-xl ring-1 ring-black/5">
                      <p className="text-sm font-bold text-foreground mb-1.5">Condiciones de uso</p>
                      <p className="text-xs text-foreground/70">Requiere reservación previa y acatar normas de conservación ambiental.</p>
                   </div>
                   <div className="mt-6 pt-4 border-t border-black/5 text-center">
                      <p className="text-xs font-bold text-brand-turquoise tracking-wide">RESERVAS Y COORDINACIÓN VÍA WHATSAPP</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Zona Aterrizaje */}
            <div className="flex flex-col bg-white rounded-[2rem] shadow-sm ring-1 ring-black/5 overflow-hidden transition hover:shadow-md">
              <div className="relative h-64 w-full"><Image src="/images/gallery/img13.jpg" alt="Camping en zona de aterrizaje" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
              <div className="p-8 sm:p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-3">Camping en zona de aterrizaje</h3>
                <p className="text-foreground/70 leading-relaxed mb-8">
                  Un entorno rodeado de naturaleza y tranquilidad en el valle, ideal para familias y para quienes prefieren un clima ligeramente más cálido.
                </p>
                <div className="space-y-4 mt-auto">
                   <div className="p-5 bg-slate-50 rounded-xl ring-1 ring-black/5">
                      <p className="text-sm font-bold text-foreground mb-1.5">Servicios disponibles</p>
                      <p className="text-xs text-foreground/70">Terreno amplio, acceso a baños y seguridad perimetral.</p>
                   </div>
                   <div className="p-5 bg-slate-50 rounded-xl ring-1 ring-black/5">
                      <p className="text-sm font-bold text-foreground mb-1.5">Condiciones de uso</p>
                      <p className="text-xs text-foreground/70">Disponibilidad sujeta a aforo. Prohibido el ingreso de mascotas no controladas.</p>
                   </div>
                   <div className="mt-6 pt-4 border-t border-black/5 text-center">
                      <p className="text-xs font-bold text-brand-turquoise tracking-wide">RESERVAS Y COORDINACIÓN VÍA WHATSAPP</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Beneficios Comunes ── */}
      <section className="py-24 bg-background-secondary border-t border-black/5">
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

      {/* ── 8. Llamado a la acción final ── */}
      <section className="relative overflow-hidden bg-footer-bg py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-footer-bg via-footer-bg/80 to-brand-turquoise-darker/50" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            ¿Listo para vivir la experiencia PQE?
          </h2>
          <a
            href="https://wa.me/593998003003"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-green px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-green-dark"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Reservar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
