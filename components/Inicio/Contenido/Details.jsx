"use client";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import GaleriaIMG from "./GaleriaIMG/GaleriaIMG";
import GaleriaVIDEO from "./GaleriaVIDEO/GaleriaVIDEO";
import Link from "next/link";
import { conversorDeHora12 } from "./conversorDeHora12";

import Modal from "./GaleriaIMG/Modal";
import "./GaleriaIMG/styleG.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./GaleriaVIDEO/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { lugarEncuentro, servicios, serviciosExclusivos } from "@/Data/data";
import { anuncios } from "@/Data/dataAnuncios";

const Details = ({ id }) => {
  const [anuncio, setAnuncio] = useState()
  const [tarifaPresencial, setTarifaPresencial] = useState([]);
  const [tarifaVirtual, setTarifaVirtual] = useState([]);

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const handelRotationRight = () => {
    const totalLength = anuncio?.galeriaFotos?.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = anuncio?.galeriaFotos[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = anuncio?.galeriaFotos?.filter((item) => {
      return anuncio?.galeriaFotos?.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = anuncio?.galeriaFotos?.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = anuncio?.galeriaFotos[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = anuncio?.galeriaFotos?.filter((item) => {
      return anuncio?.galeriaFotos?.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  // useEffect(() => {
  //     axios.get(`/api/anuncio/${id}`)
  //     .then(res => setAnuncio(res.data))
  //     .catch(err => console.log(err))
  // }, [])

  const idioma = [];
  anuncio?.idioma?.map((i) =>
    i === "Español"
      ? idioma.push("ES")
      : i === "Inglés"
      ? idioma.push("EN")
      : i === "Portugués"
      ? idioma.push("PT")
      : ""
  );

  useEffect(() => {
    // const data = localStorage.getItem("anuncioStorage");
    // const Anuncios = JSON.parse(data);
    const anuncioFound = anuncios?.find((a) => a?.id === id);
    if (anuncioFound) {
      setAnuncio(anuncioFound);
    } 
    // else {
    //   axios
    //     .get(`/api/anuncio/${id}`)
    //     .then((res) => setAnuncio(res.data))
    //     .catch((err) => console.log(err));
    // }
  }, []);

  useEffect(() => {
    if (anuncio?.tarifaPresencial) {
      // const tarifaPresencial = JSON.parse(anuncio?.tarifaPresencial);
      // console.log(tarifaPresencial);
      setTarifaPresencial(anuncio?.tarifaPresencial);
    }
    if (anuncio?.tarifaVirtual) {
      // const tarifaVirtual = JSON.parse(anuncio?.tarifaVirtual);
      // console.log(tarifaVirtual);
      setTarifaVirtual(anuncio?.tarifaVirtual);
    }
  }, [anuncio?.tarifaVirtual, anuncio?.tarifaPresencial]);

  const numeroTelefono = anuncio?.whatsapp;

  const galeriaVIDEO = anuncio?.galeriaVideos;

  const handleLlamarClick = () => {
    window.location.href = `tel:${numeroTelefono}`;
  };

  return (
    <div className="flex">
      <containerinfo className="flex flex-col gap-4 items-center justify-center dark:bg-dark-l bg-[#edeced] min-h-screen w-screen pb-10">
        <contain className="flex flex-col gap-2 w-[90%] lg:w-[90%] 2xl:w-[1170px] p-10 mt-[90px] mx-20 dark:bg-dark-d rounded-[10px] bg-white shadow-2xl ">
          <p className="text-slate-500 dark:text-slate-300 text-medium font-think text-[20px]">
            <strong>ID: {anuncio?.idFrontend}</strong>
          </p>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex flex-col gap-2">
              <img
                src={anuncio?.imagenPrincipal}
                alt=""
                className="max-w-[400px] h-fit lg:min-w-[400px] border-4 lg:h-fit rounded-[10px] shadow-xl"
              />

              <div className="flex gap-4 w-full items-center justify-center sm:w-[50%] lg:w-full">
                <button
                  target="_blank"
                  onClick={handleLlamarClick}
                  className="flex gap-2 items-center w-fit justify-center bg-blue-500 text-white px-6 py-2 rounded-[10px] ease-linear duration-200 transition-all hover:bg-blue-600"
                >
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
                    alt="phone"
                    className="w-[18px] h-[18px] sm:w-[28px] sm:h-[28px]"
                  />
                  <nav className="text-[12px] sm:text-[16px] font-bold my-auto">
                    Teléfono
                  </nav>
                </button>
                <Link
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=+51${anuncio?.whatsapp}&text=Hola%20${anuncio?.name},%20te%20vi%20en%20Papayahub.pe,%20¿en%20qué%20horario%20estás%20disponible%20hoy?`}
                  className="flex gap-2 items-center w-fit justify-center bg-green-500 text-white px-6 py-2 rounded-[10px] ease-linear duration-200 transition-all hover:bg-green-600"
                >
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/whatsapp--v1.png"
                    alt="whatsapp--v1"
                    className="my-auto w-[20px] h-[20px] sm:w-[28px] sm:h-[28px]"
                  />
                  <nav className="text-[12px] sm:text-[16px] font-bold my-auto">
                    WhatsApp
                  </nav>
                </Link>
              </div>
            </div>

            <detalles className="flex flex-col gap-6">
              <info className="flex flex-col gap-4">
                <infodetails className="flex flex-col lg:flex-row gap-2 text-slate-700 dark:text-white">
                  <h1 className=" text-4xl font-extrabold">{anuncio?.name}</h1>

                  <div className="text-[12px] sm:text-sm grid grid-cols-3 text-slate-700 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-none overflow-hidden 2xl:flex gap-2">
                    <h2 className="rounded-[10px] bg-back-orange my-auto px-2 py-1 text-center">
                      {anuncio?.nacionalidad}
                    </h2>
                    <h2 className="rounded-[10px] bg-back-orange my-auto px-2 py-1 text-center">
                      {anuncio?.edad} años
                    </h2>
                    <h2 className="rounded-[10px] bg-back-orange my-auto px-2 py-1 text-center">
                      {anuncio?.altura} cm
                    </h2>
                    <h2 className="rounded-[10px] bg-back-orange my-auto px-2 py-1 text-center">
                      {anuncio?.peso} kg
                    </h2>
                    {/* <h2 className='rounded-[10px] bg-back-red my-auto px-2 py-1 text-center'>Idioma: <nav className='inline-block'>{" "}{idioma?.join(", ") || ""}</nav></h2> */}
                    <h2 className="rounded-[10px] bg-back-orange my-auto px-2 py-1 text-center">
                      ID: {anuncio?.idFrontend}
                    </h2>
                  </div>
                </infodetails>
                <infodescription className="flex flex-col gap-2 text-slate-500 dark:text-slate-300 w-full">
                  <h2
                    className=" text-medium font-think text-[16px] text-justify"
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {anuncio?.description}
                  </h2>
                  <h2 className="text-medium font-think text-[16px] text-red-500 font-bold">
                    No olvides mencionar que me viste en Papayahub.
                  </h2>
                </infodescription>
              </info>

              {tarifaPresencial[0]?.value ||
              tarifaPresencial[1]?.value ||
              tarifaVirtual[0]?.value ||
              tarifaVirtual[1]?.value ||
              tarifaVirtual[2]?.value ? (
                <tarifasall className="flex flex-col gap-4">
                  <tarifas className="flex flex-col lg:flex-row gap-4 lg:gap-32">
                    {tarifaPresencial[0]?.value ||
                    tarifaPresencial[1]?.value ? (
                      <div className="flex flex-col gap-2 text-slate-500 dark:text-slate-300">
                        <div className="flex flex-col gap-2 text-medium font-think text-[16px]">
                          <h2 className="text-black dark:text-white text-xl font-bold">
                            Tarifa Presencial
                          </h2>{" "}
                          {tarifaPresencial
                            ?.filter(
                              (tarifa) =>
                                tarifa.value !== undefined &&
                                tarifa.value !== ""
                            )
                            ?.map((tarifa) => (
                              <div className="flex gap-12 font-normal text-sm">
                                <h2>{tarifa.name} minutos</h2>
                                <h2>S/. {tarifa.value}</h2>
                              </div>
                            )) || ""}
                          <div className="flex gap-12 font-normal text-sm">
                            <h2>
                              {tarifaPresencial[0]?.value?.length &&
                                tarifaPresencial[0]?.name}{" "}
                              minutos
                            </h2>
                            <h2>
                              S/.{" "}
                              {tarifaPresencial[0]?.value?.length &&
                                tarifaPresencial[0]?.value}
                            </h2>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {tarifaVirtual[0]?.value ||
                    tarifaVirtual[1]?.value ||
                    tarifaVirtual[2]?.value ? (
                      <div className="flex flex-col gap-2 text-slate-500 dark:text-slate-300">
                        <div className="flex flex-col text-xl font-bold">
                          <h2 className="text-black dark:text-white text-xl font-bold">
                            Tarifa Virtual
                          </h2>{" "}
                          <div className="flex flex-col gap-1 mt-2">
                            {tarifaVirtual
                              ?.filter(
                                (tarifa) =>
                                  tarifa.value !== undefined &&
                                  tarifa.value !== ""
                              )
                              ?.map((tarifa) => (
                                <div className="flex gap-12 font-normal text-sm">
                                  <h2>
                                    {tarifa.name === "60"
                                      ? "15"
                                      : tarifa.name === "30"
                                      ? "10"
                                      : tarifa.name === "15"
                                      ? "05"
                                      : ""}{" "}
                                    minutos
                                  </h2>
                                  <h2>S/. {tarifa.value}</h2>
                                </div>
                              )) || ""}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </tarifas>
                </tarifasall>
              ) : (
                ""
              )}

              {lugarEncuentro.some((categoria) =>
                anuncio?.categorias?.includes(categoria)
              ) ? (
                <lugarencuentro className="flex flex-col gap-2">
                  <h1 className="text-black dark:text-white text-xl font-bold">
                    Lugar de encuentro:
                  </h1>
                  <div className="text-[12px] sm:text-sm flex flex-wrap gap-2">
                    {anuncio?.categorias?.map((c, index) =>
                      lugarEncuentro.includes(c) ? (
                        <h2
                          key={index}
                          className="rounded-[10px] bg-back-orange my-auto px-2 py-1 text-center"
                        >
                          {c}
                        </h2>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </lugarencuentro>
              ) : (
                ""
              )}

              {servicios.some((categoria) =>
                anuncio?.categorias?.includes(categoria)
              ) ? (
                <misservicios className="flex flex-col gap-2">
                  <h1 className="text-black dark:text-white text-xl font-bold">
                    Mis servicios:
                  </h1>
                  <div className="text-[12px] sm:text-sm flex flex-wrap gap-2">
                    {anuncio?.categorias?.map((c, index) =>
                      servicios.includes(c) ? (
                        <h2
                          key={index}
                          className="rounded-[10px] bg-back-orange my-auto px-2 py-1 text-center"
                        >
                          {c}
                        </h2>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </misservicios>
              ) : (
                ""
              )}

              {serviciosExclusivos.some((categoria) =>
                anuncio?.categorias?.includes(categoria)
              ) ? (
                <serviciosexclusivos className="flex flex-col gap-2">
                  <h1 className="text-black dark:text-white text-xl font-bold">
                    Servicios exclusivos:
                  </h1>
                  <div className="text-[12px] sm:text-sm flex flex-wrap gap-2">
                    {anuncio?.categorias?.map((c, index) =>
                      serviciosExclusivos.includes(c) ? (
                        <h2
                          key={index}
                          className="rounded-[10px] bg-back-orange my-auto px-2 py-1 text-center"
                        >
                          {c}
                        </h2>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </serviciosexclusivos>
              ) : (
                ""
              )}

              <adicional className="flex flex-col gap-4">
                <h1 className="text-black dark:text-white text-xl font-bold">
                  Detalles adicionales:
                </h1>
                <div className="flex flex-col gap-2 text-slate-500 dark:text-slate-300">
                  {/* <h2 className='text-medium font-think text-[16px]'><strong>Categorias de atención:</strong>{" "}
              {anuncio?.categorias?.join(", ") || ""}</h2> */}
                  <h2 className="text-medium font-think text-[16px]">
                    <strong>Horario de atención:</strong>
                  </h2>
                  <h2 className="text-medium font-think text-[16px]">
                    {anuncio?.diasAtencion} de {anuncio?.horarioInicio} a{" "}
                    {anuncio?.horarioFin}
                  </h2>
                  <h2 className="text-medium font-think text-[16px]">
                    <strong>Región de atención:</strong> {anuncio?.region}
                  </h2>
                  <h2 className="text-medium font-think text-[16px]">
                    <strong>Distrito de atención:</strong> {anuncio?.lugar}
                  </h2>
                </div>
              </adicional>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 overflow-hidden relative">
                {anuncio?.galeriaFotos?.map((item, index) => (
                  <div key={index} className="wrapper-images">
                    <img
                      src={item}
                      alt={index}
                      onClick={() => handleClick(item, index)}
                      className=""
                    />
                  </div>
                ))}
              </div>
              <div>
                {clickedImg && (
                  <Modal
                    clickedImg={clickedImg}
                    handelRotationRight={handelRotationRight}
                    setClickedImg={setClickedImg}
                    handelRotationLeft={handelRotationLeft}
                  />
                )}
              </div>

              {galeriaVIDEO?.length > 0 && (
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  pagination={{
                    type: "fraction",
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper max-w-[1400px]"
                  breakpoints={{
                    600: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {galeriaVIDEO &&
                    galeriaVIDEO?.map((g) => (
                      <SwiperSlide style={{ background: "transparent" }}>
                        <article className="p-4 text-white rounded-md">
                          <div className="overflow-hidden my-0 mx-auto">
                            <video
                              src={g}
                              alt="imagen de la chica"
                              className="rounded-[10px]"
                              controls
                            />
                          </div>
                        </article>
                      </SwiperSlide>
                    ))}
                </Swiper>
              )}
            </detalles>
          </div>
        </contain>

        {/* <GaleriaIMG galeriaIMG={anuncio?.galeriaFotos} /> */}
        {/* <GaleriaVIDEO galeriaVIDEO={anuncio?.galeriaVideos} /> */}
      </containerinfo>
    </div>
  );
};

export default Details;
