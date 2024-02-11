import { SignUp } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

const quick = Poppins({ subsets: ['latin'], weight: ["400", "600"] })

export const metadata = {
  title: "Registrarse a Papayahub - Kinesiólogas y putas en Peru",
  description:
    "Registrate a Papayahub y publica tu anuncio totalmente gratis.",
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL(
    "https://papayahub.com/sign-up" ||
      "https://www.papayahub.com/sign-up"
  ),
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "RRB CAPITAL" }],
  publisher: 'RRB CAPITAL',
};

export default function Page() {

  return (
    <div className={quick.className}>
      <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center bg-back-light relative">
      <div className="z-10 mt-20 m-4 bg-[#0000003e] shadow-sm p-[2px] rounded-[20px] relative">
        
        <section className="m-4 p-4 rounded-[20px]">
        <h1 className="text-center text-white font-bold text-xl shadow-normal bg-[#000000b1] rounded-[10px] w-[88%] p-2 mx-auto"><strong className="text-t-red">Registrarse</strong> a PapayaHub</h1>
          <div className="flex flex-col sm:flex-row gap-2">
            <SignUp />
          </div>
        </section>
      </div>
      <img
        src="/assets/bannerfulla.jpg"
        alt=""
        className="fixed z-0 top-0 left-0 w-screen min-h-screen overflow-hidden object-cover"
      />
    </div>
    </div>
  );
}
