import CrearAnuncio from "@/components/FormCreates/Anuncios/CrearAnuncio"

export const metadata = {
  title: "Publicar Anuncio - Papayahub",
  description: "Publica tu anuncio totalmente gratis en Papayahub.",
  metadataBase: new URL(
    "https://photokinnes.com/crear-anuncio" ||
      "https://www.photokinnes.com/crear-anuncio"
  ),
  alternates: {
    canonical: "/",
  },
};

const CrearAnuncioPage = () => {
  return (
    <>
        <CrearAnuncio />
    </>
  )
}

export default CrearAnuncioPage;