import React from 'react'

const Banner = () => {
  return (
    <div className="mt-10 z-9 flex flex-col  text-white">
        <bannercontainer className=" overflow-hidden w-full mt-10 bg-transparent rounded-xl flex items-center justify-center relative scale-[0.9]"  >
          <textbanner className="z-30 my-[60px] sm:my-[70px] w-screen leading-0 rounded-[20px] flex flex-col items-center justify-center">
          <h1 className="mx-6 text-[16px] sm:text-[24px] text-white text-center">
                {/* Si pediste una mercedez y te llega un kia... */}
          </h1>
          <h1 className="mx-6 text-[16px] sm:text-[24px] text-white text-center">
                {/* Dale clic en <strong className="font-extrabold">reportar.</strong> */}
          </h1>
          </textbanner>

          <div>
            {/* <img
              src="/assets/bannerfulla.jpg"
              alt="teamdev"
              className=" z-10 absolute top-0 right-0 left-0 
                      m-auto bg-no-repeat object-cover w-full h-full rounded-[20px]"
              
            /> */}
             <img
              src="/assets/newbannerpro12.jpg"
              alt="teamdev"
              className=" z-10 absolute top-0 right-0 left-0 
                      m-auto bg-no-repeat scale-[1] sm:scale-[1.2] lg:scale-100 object-cover w-full h-full rounded-[20px]"
              
            />
          </div>
        </bannercontainer>
      </div>
  )
}

export default Banner