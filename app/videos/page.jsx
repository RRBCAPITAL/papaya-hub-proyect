import CardsVideos from "@/components/ContenidoVideos/CardsVideos";
import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Videos de kinesiólogas Lima Metropolitana 🥰Papayahub Videos✅",
  description:
    "Videos de kinesiólogas reales en Perú, kinesiólogas chibolas, kinesiólogas venezolanas, colombianas, Kines teens en Lima, Lince, San Borja, Ate, Comas, Villa Maria, Villa el Salvador, Chorrillos, Miraflores",
  keywords: [
    "Videos kinesiologas lima",
    "Videos kinesiologas en trujillo",
    "Videos los olivos",
    "Videos kines teens",
    "Videos kinesiologas chiclayo",
    "Videos prostitutas lima",
    "Videos kines surco",
    "Videos caletas lima",
    "Videos putas peruanas",
    "Videos putas extranjeras",
    "Videos anfitrionas lima",
    "Videos kines miraflores",
    "Videos kinesiologas venezolanas y colombianas",
  ],
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL(
    "https://papayahub.pe/videos" ||
      "https://www.papayahub.pe/videos"
  ),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "RRB CAPITAL" }],
  publisher: 'RRB CAPITAL',
};

const VideosPage = () => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://papayahub.pe/videos" key="canonical" />
      </Head>
      <CardsVideos />
    </>
  );
};

export default VideosPage;
