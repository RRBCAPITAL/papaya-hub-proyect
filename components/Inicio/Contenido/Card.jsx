"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { changeIn } from "@/utils/motionTransitions";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Card = ({
  id,
  imagenPrincipal,
  name,
  nacionalidad,
  lugar,
  edad,
  region,
  nivel,
  anuncioTarifaPresencial,
  anuncioTarifaVirtual,
}) => {
  const router = useRouter();
  const shortId = id?.substring(0, 7);
  const [isHovered, setIsHovered] = useState(false);

  const [tarifaPresencial, setTarifaPresencial] = useState([]);
  const [tarifaVirtual, setTarifaVirtual] = useState([]);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  // useEffect(() => {
  //   if (anuncioTarifaPresencial) {
  //     const tarifaPresencial = JSON.parse(anuncioTarifaPresencial);
  //     console.log(tarifaPresencial);
  //     setTarifaPresencial(tarifaPresencial);
  //   }
  //   if (anuncioTarifaVirtual) {
  //     const tarifaVirtual = JSON.parse(anuncioTarifaVirtual);
  //     console.log(tarifaVirtual);
  //     setTarifaVirtual(tarifaVirtual);
  //   }
  // }, [anuncioTarifaVirtual, anuncioTarifaPresencial]);

  // console.log(tarifaPresencial);
  // console.log(tarifaVirtual);

  return (
    <div
      onClick={() => {
        const formattedNacionalidad = nacionalidad.replace(/\s+/g, "-");
        const formattedRegion = region.replace(/\s+/g, "-");
        const formattedLugar = lugar.replace(/\s+/g, "-");
        const formattedName = name.replace(/\s+/g, "-");

        router.push(
          `/mujeres/kinesiologas/${formattedNacionalidad}/${formattedRegion}/${formattedLugar}/${formattedName}/${id}`
        );
      }}
    >
      <motion.div
        style={{ position: "relative" }}
        className={`mb-2 dark:bg-dark-d bg-white hover:cursor-pointer`}
        variants={changeIn(0)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <Image
          src={imagenPrincipal}
          width={200}
          height={200}
          alt="Imagen de la anfitriona"
          className={`${
            nivel === "BICHOTA"
              ? "border-bor-red"
              : nivel === "MOTOMAMI"
              ? "border-blue-500"
              : "border-slate-500"
          } relative w-[300px] sm:w-[400px] sm:h-[600px] h-[300px] xl:h-[400px] 2xl:h-[500px] object-cover border-[2px]`}
        />

        <div
          className="absolute dark:text-white text-slate-600 px-1 lg:px-4"
          style={{
            // backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: "0 0 18px 18px",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <section className="flex flex-col px-1 gap-0 pb-2 lg:pb-[20px]">
            <div className="flex gap-1">
              <div className="flex gap-1 items-center justify-center">
                <div className="w-full flex gap-[1px] text-black px-1 py-1 rounded items-center justify-center bg-white">
                  {nacionalidad === "Peruana" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/peru.png"
                      alt="peru"
                    />
                  ) : nacionalidad === "Colombiana" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/colombia.png"
                      alt="colombia"
                    />
                  ) : nacionalidad === "Argentina" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/argentina.png"
                      alt="argentina"
                    />
                  ) : nacionalidad === "Boliviana" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/bolivia.png"
                      alt="bolivia"
                    />
                  ) : nacionalidad === "Ecuatoriana" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/ehcuador.png"
                      alt="ehcuador"
                    />
                  ) : nacionalidad === "Española" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/spain-2.png"
                      alt="spain-2"
                    />
                  ) : nacionalidad === "Brasileña" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/brazil.png"
                      alt="brazil"
                    />
                  ) : nacionalidad === "Chilena" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/chile.png"
                      alt="chile"
                    />
                  ) : nacionalidad === "Uruguaya" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/uruguay.png"
                      alt="uruguay"
                    />
                  ) : nacionalidad === "Mexicana" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/mexico.png"
                      alt="mexico"
                    />
                  ) : nacionalidad === "Paraguaya" ? (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/paraguay.png"
                      alt="paraguay"
                    />
                  ) : (
                    <img
                      width="16"
                      height="16"
                      src="https://img.icons8.com/color/48/venezuela.png"
                      alt="venezuela"
                    />
                  )}
                  <h2 className="my-auto border-2 border-transparent text-[12px] mt-[3px]">
                    {name} -
                  </h2>
                  <h2 className="my-auto border-2 border-transparent text-[12px] mt-[3px]">
                    {edad} años
                  </h2>
                </div>
              </div>
            </div>

            <div className="flex gap-1 mt-1 rounded-[5px] w-fit px-2 py-1 bg-white">
              <h2 className="text-black my-auto text-[12px]">
                {lugar}{" "}
                {tarifaPresencial[0]?.value
                  ? `- S/${tarifaPresencial[0]?.value}`
                  : tarifaVirtual[0]?.value && `- S/${tarifaVirtual[0]?.value}`}
              </h2>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
