import ActivarAnuncio from '@/components/ActivarAnuncio/ActivarAnuncio'

export const metadata = {
  title: "Metodos de pago - Papayahub",
  description: "Publica tu anuncio totalmente gratis en Papayahub, estos son nuestros planes para activar tu anuncio.",
  metadataBase: new URL(
    "https://papayahub.pe/activar-anuncio" ||
      "https://www.papayahub.pe/activar-anuncio"
  ),
  alternates: {
    canonical: "/",
  },
};

const ActivarAnuncioPage = () => {
  
  return (
      <>
        <ActivarAnuncio />
      </>
      )
}

export default ActivarAnuncioPage