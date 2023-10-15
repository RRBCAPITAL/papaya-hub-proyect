import React from 'react'

const MisionVision = () => {
  return (
    <section className='flex w-screen bg-[#26074e] dark:bg-[#fff] text-white'>
        <section className='flex flex-col items-center w-full justify-center mt-[100px] gap-6 sm:gap-10'>
            <div className='mx-4 max-w-[800px] w-full flex items-center justify-center'>
                <h1 className='text-white dark:text-t-dark text-4xl leading-[45px] sm:leading-[40px] font-extrabold text-center'>
                    ¡Bienvenido a <strong className='text-[#903aff]'>Mr Developer</strong>! 
                    Estamos potenciando a los futuros talentos digitales.</h1>
            </div>
            <div className='grid sm:grid-cols-2 max-w-[80%] gap-2 sm:gap-10'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <h3 className='font-bold text-2xl my-4 dark:text-t-dark'>Nuestra misión</h3>
                    <p className='hidden lg:block p-[2rem] bg-[#6f01ff] text-xl'>Proporcionar a los jóvenes con conocimientos básicos
                    en tecnologías web una plataforma donde puedan participar en proyectos colaborativos y adquirir experiencia práctica
                        en un simulador de entorno laboral. Con nuestros jóvenes nos comprometemos a impulsar
                        su crecimiento profesional, y para empresas o emprendedores
                        a hacer realidad sus ideas a través de nuestros equipos de desarrollo.
                        </p>
                        <p className=' lg:hidden p-[2rem] bg-[#6f01ff] text-xl'>
                        Capacitar a jóvenes en tecnologías web y conectarlos con proyectos colaborativos para ganar
                        experiencia laboral. Ayudamos a empresas y emprendedores a concretar ideas con nuestros equipos de desarrollo.</p>
                </div>
                <div className='w-full flex flex-col items-center justify-center'>
                    <h3 className='font-bold text-2xl my-4 dark:text-t-dark'>Nuestra visión</h3>
                    <p className='hidden lg:block p-[2rem] bg-[#6f01ff] text-xl'>Convertirnos en la plataforma de referencia para jóvenes
                    desarrolladores y empresas o emprendedores que deseen expandir sus habilidades, adquirir experiencia práctica y llevar sus
                    ideas a la realidad. Aspiramos a ser reconocidos por promover el
                    aprendizaje continuo y el desarrollo profesional en un entorno inspirador y de innovación constante.</p>
                    <p className=' lg:hidden p-[2rem] bg-[#6f01ff] text-xl'>
                    Ser la plataforma líder para jóvenes desarrolladores, empresas y emprendedores que buscan crecer, ganar
                    experiencia y hacer realidad sus ideas. Destacamos por
                    el desarrollo en un entorno inspirador e innovador.</p>
                </div>
            </div>
            <h3 className='font-bold text-2xl dark:text-t-dark'>Nuestros valores</h3>
            <div className='mb-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 max-w-[80%] gap-2 sm:gap-14'>
                <div className='bg-[#6f01ff]  overflow-hidden px-4 py-2 rounded-[10px]'>
                    <h3 className='font-bold text-center my-2'>Trabajo en equipo</h3>
                    <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449317/valor1_ydb5g0.png" alt="valores" className='h-[50px] w-[50px] mx-auto my-2' />
                </div>
                <div className='bg-[#6f01ff]  overflow-hidden px-4 py-2 rounded-[10px]'>
                    <h3 className='font-bold text-center my-2'>Pasión por el desarrollo</h3>
                    <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449317/valor2_yhpzya.png" alt="valores" className='h-[50px] w-[50px] mx-auto my-2' />
                </div>
                <div className='bg-[#6f01ff]  overflow-hidden px-4 py-2 rounded-[10px]'>
                    <h3 className='font-bold text-center my-2'>Fomentamos la creatividad</h3>
                    <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449317/valor3_miyahw.png" alt="valores" className='h-[50px] w-[50px] mx-auto my-2' />
                </div>
                <div className='bg-[#6f01ff] overflow-hidden px-4 py-2 rounded-[10px]'>
                    <h3 className='font-bold text-center my-2'>Entorno inclusivo</h3>
                    <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449318/valor4_oh1ud7.png" alt="valores" className='h-[50px] w-[50px] mx-auto my-2' />
                </div>
                <div className='bg-[#6f01ff] overflow-hidden px-4 py-2 rounded-[10px]'>
                    <h3 className='font-bold text-center my-2'>Experiencia práctica</h3>
                    <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449316/valor5_ncmcid.png" alt="valores" className='h-[50px] w-[50px] mx-auto my-2' />
                </div>
                <div className='bg-[#6f01ff] overflow-hidden px-4 py-2 rounded-[10px]'>
                    <h3 className='font-bold text-center my-2'>Calidad y compromiso.</h3>
                    <img src="https://res.cloudinary.com/dvaiww9ri/image/upload/v1694449316/valor6_lff8hm.png" alt="valores" className='h-[50px] w-[50px] mx-auto my-2' />
                </div>
            </div>
        </section>
    </section>
  )
}

export default MisionVision