import CardsCositas from "@/components/ContenidoCositas/CardsCositas";
import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Cositas de kinesiólogas 🥰Papayahub Cositas✅",
  description:
    "Cositas de kinesiólogas reales en Perú, kinesiólogas chibolas, kinesiólogas venezolanas, colombianas, Kines teens en Lima, Lince, San Borja, Ate, Comas, Villa Maria, Villa el Salvador, Chorrillos, Miraflores",
  keywords: [
    "Cositas kinesiologas lima",
    "Cositas kinesiologas en trujillo",
    "Cositas los olivos",
    "Cositas kines teens",
    "Cositas kinesiologas chiclayo",
    "Cositas prostitutas lima",
    "Cositas kines surco",
    "Cositas caletas lima",
    "Cositas putas peruanas",
    "Cositas putas extranjeras",
    "Cositas anfitrionas lima",
    "Cositas kines miraflores",
    "Cositas kinesiologas venezolanas y colombianas",
  ],
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://papayahub.pe/cositas'),
  authors: [{ name: "RRB CAPITAL" }],
  publisher: 'RRB CAPITAL',
};

const CositasPage = () => {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://papayahub.pe/cositas"
          key="canonical"
        />
      </Head>
      <CardsCositas />
    </>
  );
};

export default CositasPage;
