import style from './Testimonio.module.css'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonios = () => {
  return (
    
    <section className='overflow-hidden relative mb-[5rem]'>
        <div className='flex items-center justify-center'>
            <div className='p-[1rem]  items-center inline-block border-b-2 border-[#6f01ff]'>
            <h2 className='text-center text-4xl mx-4 font-light dark:text-t-dark text-white'><strong className='font-extrabold'>Súmate</strong> tú también a nuestra comunidad</h2>
            </div>
        </div>
        <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper max-w-[1400px]"
        breakpoints = {{
            600: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }}
      >

            <SwiperSlide style={{background: "transparent"}}>
            <article className='p-[0.5rem] mb-20 text-white max-w-[300px] sm:max-w-[280px] lg:max-w-[360px] rounded-md dark:text-t-dark dark:bg-[#eae0ff] bg-slate-900'>
                <div className='w-[6rem] h-[6rem] rounded-[50%] overflow-hidden border-[0.5rem] border-indigo-500 my-0 mx-auto'>
                    <img src="/assets/avatar1.jpg" alt="avatar" />
                </div>
                <div className='flex flex-col items-center justify-center my-4'>
                    <h5 className='font-bold text-xl'>Diana R</h5>
                    <small className='text-[16px] font-light'>Tutor Expert & Fronted Developer</small>
                </div>
                <div className={style.testimonioBody}>
                    <p className='dark:text-white'>
                    Mr Developer es realmente innovador. Trabajar en proyectos colaborarando con otros estudiantes me ha permitido
                    desarrollar habilidades prácticas y fortalecer mi confianza.
                    </p>

                </div>
            </article>
            </SwiperSlide>
            

            <SwiperSlide style={{background: "transparent"}}>
            <article className='p-[0.5rem] mb-20 text-white max-w-[300px] sm:max-w-[280px] lg:max-w-[360px] rounded-md  dark:text-t-dark dark:bg-[#eae0ff] bg-slate-900'>
                <div className='w-[6rem] h-[6rem] rounded-[50%] overflow-hidden border-[0.5rem] border-indigo-500 my-0 mx-auto'>
                    <img src="/assets/avatar2.jpg" alt="avatar" />
                </div>
                <div className='flex flex-col items-center justify-center my-4'>
                <h5 className='font-bold text-xl'>Alisson T.</h5>
                    <small className='text-[16px] font-light'>Backend Developer</small>
                </div>
                <div className={style.testimonioBody}>
                    <p className='dark:text-white'>
                    Mr Developer es realmente innovador. Trabajar en proyectos colaborarando con otros estudiantes me ha permitido
                    desarrollar habilidades prácticas y fortalecer mi confianza.
                    </p>

                </div>
            </article>
            </SwiperSlide>
            

            <SwiperSlide style={{background: "transparent"}}>
            <article className='p-[0.5rem] mb-20 text-white max-w-[300px] sm:max-w-[280px] lg:max-w-[360px] rounded-md  dark:text-t-dark dark:bg-[#eae0ff] bg-slate-900'>
                <div className='w-[6rem] h-[6rem] rounded-[50%] overflow-hidden border-[0.5rem] border-indigo-500 my-0 mx-auto'>
                    <img src="/assets/avatar3.jpg" alt="avatar" />
                </div>
                <div className='flex flex-col items-center justify-center my-4'>
                <h5 className='font-bold text-xl'>Carlos T.</h5>
                    <small className='text-[16px] font-light'>Fronted Developer</small>
                </div>
                <div className={style.testimonioBody}>
                    <p className='dark:text-white'>
                    Mr Developer es realmente innovador. Trabajar en proyectos colaborarando con otros estudiantes me ha permitido
                    desarrollar habilidades prácticas y fortalecer mi confianza.
                    </p>

                </div>
            </article>
            </SwiperSlide>
            

            <SwiperSlide style={{background: "transparent"}}>
            <article className='p-[0.5rem] mb-20 text-white max-w-[300px] sm:max-w-[280px] lg:max-w-[360px] rounded-md dark:text-t-dark dark:bg-[#eae0ff] bg-slate-900'>
                <div className='w-[6rem] h-[6rem] rounded-[50%] overflow-hidden border-[0.5rem] border-indigo-500 my-0 mx-auto'>
                    <img src="/assets/avatar4.jpg" alt="avatar" />
                </div>
                <div className='flex flex-col items-center justify-center my-4'>
                <h5 className='font-bold text-xl'>Juan Carlos R.</h5>
                    <small className='text-[16px] font-light'>Tutor Expert & Fronted Developer</small>
                </div>
                <div className={style.testimonioBody}>
                    <p className='dark:text-white'>
                    Mr Developer es realmente innovador. Trabajar en proyectos colaborarando con otros estudiantes me ha permitido
                    desarrollar habilidades prácticas y fortalecer mi confianza.
                    </p>

                </div>
            </article>
            </SwiperSlide>
            

            <SwiperSlide style={{background: "transparent"}}>
            <article className='p-[0.5rem] mb-20 text-white max-w-[300px] sm:max-w-[280px] lg:max-w-[360px] rounded-md dark:text-t-dark dark:bg-[#eae0ff] bg-slate-900'>
                <div className='w-[6rem] h-[6rem] rounded-[50%] overflow-hidden border-[0.5rem] border-indigo-500 my-0 mx-auto'>
                    <img src="/assets/avatar5.jpg" alt="avatar" />
                </div>
                <div className='flex flex-col items-center justify-center my-4'>
                <h5 className='font-bold text-xl'>Alexandra S.</h5>
                    <small className='text-[16px] font-light'>Tutor Expert & Backend Developer</small>
                </div>
                <div className={style.testimonioBody}>
                    <p className='dark:text-white'>
                    Mr Developer es realmente innovador. Trabajar en proyectos colaborarando con otros estudiantes me ha permitido
                    desarrollar habilidades prácticas y fortalecer mi confianza.
                    </p>

                </div>
            </article>
            </SwiperSlide>
            
  
    </Swiper>
    </section>
  )
}

export default Testimonios