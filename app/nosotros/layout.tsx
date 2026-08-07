import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros y Contacto | PQE Vuelos en Parapente",
  description:
    "Conoce al equipo de PQE, nuestra misión, visión y los protocolos de seguridad que nos convierten en referente del parapente en Ecuador. Contáctanos para reservar tu vuelo.",
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
