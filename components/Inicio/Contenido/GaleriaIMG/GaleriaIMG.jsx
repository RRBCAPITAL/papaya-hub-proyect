"use client";

import style from "./GaleriaIMG.module.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ImageModal from "./ImageModal"; // Asegúrate de que la ruta sea correcta

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const GaleriaIMG = ({ galeriaIMG }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setCurrentImage(null);
    setModalOpen(false);
  };

  return (
    <section className="bg-dark-d py-10 text-txt-dark-l h-fit dark:bg-white px-10 rounded-[10px] shadow-custom1 overflow-hidden relative w-[90%] lg:w-[60%] mx-20">
      <div className="flex items-center justify-center">
        <div className="items-center inline-block">
          <h2 className="text-center text-4xl mx-4 font-light dark:text-black text-white">
            <strong className="font-extrabold">Galeria</strong> de fotos
          </h2>
          <h6 className="text-center dark:text-black text-white mt-2">Haz click en la imagen para expandirla.</h6>
        </div>
      </div>
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
        {galeriaIMG &&
          galeriaIMG?.map((g) => (
            <SwiperSlide style={{ background: "transparent", cursor: "pointer"}}>
              <article className="px-4 pb-8 text-white rounded-md">
                <div className="overflow-hidden my-0 mx-auto">
                  <div className="container">
                    <img
                      src={g}
                      alt="imagen de la chica"
                      className="h-[1350px] w-[1000px] rounded-[10px]"
                      onClick={() => openModal(g)}
                    />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
      </Swiper>
      {modalOpen && <ImageModal image={currentImage} closeModal={closeModal} />}
    </section>
  );
};

export default GaleriaIMG;
