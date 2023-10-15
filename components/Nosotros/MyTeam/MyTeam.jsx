import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'
import style from './MyTeam.module.css'

const MyTeam = () => {
  return (
    <section className='z-10 flex flex-col'>
      <section className='mt-[62px] text-white overflow-hidden relative mb-[5rem]'>
      <h2 className='text-center text-2xl my-6 mx-4 text-white font-bold'>Nuestro equipo de trabajo</h2>
      <div className='max-w-[280px] sm:max-w-[730px] sm:gap-[1rem] lg:max-w-5xl mx-auto grid sm:grid-cols-3 lg:grid-cols-4 gap-[2rem] px-[2rem]'>
        
        <article className={style.articleMember}>
          <div className={style.containImg}>
            <img src="/assets/avatar1.jpg" alt="avatar1" />
          </div>
          <div className='text-center mt-[1rem]'>
            <h4 className='font-bold text-xl my-2'>Daniel Rojas</h4>
            <p className='text-[16px] font-light my-2'>Expert Tutor</p>
          </div>
          <div className={style.teamSocials}>
            <Link href='https://instagram.com' className={style.Link}><BsInstagram /></Link>
            <Link href='https://github.com' className={style.Link}><BsGithub /></Link>
            <Link href='https://linkedin.com' className={style.Link}><BsLinkedin /></Link>
          </div>
        </article>

        <article className={style.articleMember}>
          <div className={style.containImg}>
            <img src="/assets/avatar2.jpg" alt="avatar1" />
          </div>
          <div className='text-center mt-[1rem]'>
            <h4 className='font-bold text-xl my-2'>Daniel Rojas</h4>
            <p className='text-[16px] font-light my-2'>Expert Tutor</p>
          </div>
          <div className={style.teamSocials}>
            <Link href='https://instagram.com' className={style.Link}><BsInstagram /></Link>
            <Link href='https://github.com' className={style.Link}><BsGithub /></Link>
            <Link href='https://linkedin.com' className={style.Link}><BsLinkedin /></Link>
          </div>
        </article>

        <article className={style.articleMember}>
          <div className={style.containImg}>
            <img src="/assets/avatar3.jpg" alt="avatar1" />
          </div>
          <div className='text-center mt-[1rem]'>
            <h4 className='font-bold text-xl my-2'>Daniel Rojas</h4>
            <p className='text-[16px] font-light my-2'>Expert Tutor</p>
          </div>
          <div className={style.teamSocials}>
            <Link href='https://instagram.com' className={style.Link}><BsInstagram /></Link>
            <Link href='https://github.com' className={style.Link}><BsGithub /></Link>
            <Link href='https://linkedin.com' className={style.Link}><BsLinkedin /></Link>
          </div>
        </article>

        <article className={style.articleMember}>
          <div className={style.containImg}>
            <img src="/assets/avatar4.jpg" alt="avatar1" />
          </div>
          <div className='text-center mt-[1rem]'>
            <h4 className='font-bold text-xl my-2'>Daniel Rojas</h4>
            <p className='text-[16px] font-light my-2'>Expert Tutor</p>
          </div>
          <div className={style.teamSocials}>
            <Link href='https://instagram.com' className={style.Link}><BsInstagram /></Link>
            <Link href='https://github.com' className={style.Link}><BsGithub /></Link>
            <Link href='https://linkedin.com' className={style.Link}><BsLinkedin /></Link>
          </div>
        </article>

        
       

      </div>
      
    </section>
    </section>
  )
}

export default MyTeam