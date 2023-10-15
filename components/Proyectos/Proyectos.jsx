"use client";

import { useParams } from "next/navigation";
import { proyectsData } from "../proyectosData/proyectosData";
import style from "./Proyectos.module.css";
import Link from "next/link";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const Proyectos = () => {
  const params = useParams();
  const proyect = proyectsData?.find((e) => e?.id === Number(params?.id));

  return (
    <section className="text-slate-200 p-10 bg-[#291349] rounded-lg">
      <div className="flex flex-col items-center gap-4 mt-10">
        <section className=" rounded-lg mt-[20px] text-white overflow-hidden relative mb-[2rem]">
          <h2 className="text-center text-2xl my-6 mx-4 text-white font-bold">
            Equipo de desarrollo de "{proyect?.name}"
          </h2>
          <div className="max-w-[280px] sm:max-w-[730px] sm:gap-[1rem] lg:max-w-5xl mx-auto grid sm:grid-cols-3 lg:grid-cols-4 gap-[2rem] px-[2rem]">
            
          <article className={style.articleMember}>
              <div className={style.containImg}>
                <img src="/assets/avatar4.jpg" alt="avatar1" />
              </div>
              <div className="text-center mt-[1rem]">
                <h4 className="font-bold text-xl my-2">Daniel Rojas</h4>
                <p className="text-[16px] font-light my-2">Tutor Expert</p>
              </div>
              <div className={style.teamSocials}>
                <Link href="https://instagram.com" className={style.Link}>
                  <BsInstagram />
                </Link>
                <Link href="https://github.com" className={style.Link}>
                  <BsGithub />
                </Link>
                <Link href="https://linkedin.com" className={style.Link}>
                  <BsLinkedin />
                </Link>
              </div>
            </article>
            
            <article className={style.articleMember}>
              <div className={style.containImg}>
                <img src="/assets/avatar1.jpg" alt="avatar1" />
              </div>
              <div className="text-center mt-[1rem]">
                <h4 className="font-bold text-xl my-2">Daniel Rojas</h4>
                <p className="text-[16px] font-light my-2">Fronted Developer</p>
              </div>
              <div className={style.teamSocials}>
                <Link href="https://instagram.com" className={style.Link}>
                  <BsInstagram />
                </Link>
                <Link href="https://github.com" className={style.Link}>
                  <BsGithub />
                </Link>
                <Link href="https://linkedin.com" className={style.Link}>
                  <BsLinkedin />
                </Link>
              </div>
            </article>

            <article className={style.articleMember}>
              <div className={style.containImg}>
                <img src="/assets/avatar1.jpg" alt="avatar1" />
              </div>
              <div className="text-center mt-[1rem]">
                <h4 className="font-bold text-xl my-2">Daniel Rojas</h4>
                <p className="text-[16px] font-light my-2">Fronted Developer</p>
              </div>
              <div className={style.teamSocials}>
                <Link href="https://instagram.com" className={style.Link}>
                  <BsInstagram />
                </Link>
                <Link href="https://github.com" className={style.Link}>
                  <BsGithub />
                </Link>
                <Link href="https://linkedin.com" className={style.Link}>
                  <BsLinkedin />
                </Link>
              </div>
            </article>

            <article className={style.articleMember}>
              <div className={style.containImg}>
                <img src="/assets/avatar2.jpg" alt="avatar1" />
              </div>
              <div className="text-center mt-[1rem]">
                <h4 className="font-bold text-xl my-2">Daniel Rojas</h4>
                <p className="text-[16px] font-light my-2">Fronted Developer</p>
              </div>
              <div className={style.teamSocials}>
                <Link href="https://instagram.com" className={style.Link}>
                  <BsInstagram />
                </Link>
                <Link href="https://github.com" className={style.Link}>
                  <BsGithub />
                </Link>
                <Link href="https://linkedin.com" className={style.Link}>
                  <BsLinkedin />
                </Link>
              </div>
            </article>
            

            <article className={style.articleMember}>
              <div className={style.containImg}>
                <img src="/assets/avatar2.jpg" alt="avatar1" />
              </div>
              <div className="text-center mt-[1rem]">
                <h4 className="font-bold text-xl my-2">Daniel Rojas</h4>
                <p className="text-[16px] font-light my-2">Fronted Developer</p>
              </div>
              <div className={style.teamSocials}>
                <Link href="https://instagram.com" className={style.Link}>
                  <BsInstagram />
                </Link>
                <Link href="https://github.com" className={style.Link}>
                  <BsGithub />
                </Link>
                <Link href="https://linkedin.com" className={style.Link}>
                  <BsLinkedin />
                </Link>
              </div>
            </article>

            <article className={style.articleMember}>
              <div className={style.containImg}>
                <img src="/assets/avatar3.jpg" alt="avatar1" />
              </div>
              <div className="text-center mt-[1rem]">
                <h4 className="font-bold text-xl my-2">Daniel Rojas</h4>
                <p className="text-[16px] font-light my-2">Backend Developer</p>
              </div>
              <div className={style.teamSocials}>
                <Link href="https://instagram.com" className={style.Link}>
                  <BsInstagram />
                </Link>
                <Link href="https://github.com" className={style.Link}>
                  <BsGithub />
                </Link>
                <Link href="https://linkedin.com" className={style.Link}>
                  <BsLinkedin />
                </Link>
              </div>
            </article>

            <article className={style.articleMember}>
              <div className={style.containImg}>
                <img src="/assets/avatar3.jpg" alt="avatar1" />
              </div>
              <div className="text-center mt-[1rem]">
                <h4 className="font-bold text-xl my-2">Daniel Rojas</h4>
                <p className="text-[16px] font-light my-2">Backend Developer</p>
              </div>
              <div className={style.teamSocials}>
                <Link href="https://instagram.com" className={style.Link}>
                  <BsInstagram />
                </Link>
                <Link href="https://github.com" className={style.Link}>
                  <BsGithub />
                </Link>
                <Link href="https://linkedin.com" className={style.Link}>
                  <BsLinkedin />
                </Link>
              </div>
            </article>

            <article className={style.articleMember}>
              <div className={style.containImg}>
                <img src="/assets/avatar4.jpg" alt="avatar1" />
              </div>
              <div className="text-center mt-[1rem]">
                <h4 className="font-bold text-xl my-2">Daniel Rojas</h4>
                <p className="text-[16px] font-light my-2">Backend Developer</p>
              </div>
              <div className={style.teamSocials}>
                <Link href="https://instagram.com" className={style.Link}>
                  <BsInstagram />
                </Link>
                <Link href="https://github.com" className={style.Link}>
                  <BsGithub />
                </Link>
                <Link href="https://linkedin.com" className={style.Link}>
                  <BsLinkedin />
                </Link>
              </div>
            </article>

            
          </div>
        </section>

        <h3 className="my-2">Desarrolladores del proyecto #{proyect.id}</h3>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-center font-bold text-3xl sm:text-5xl">
            {proyect.name}
          </h1>
          <p className=" text-center w-">{proyect.descriptionBig}</p>
        </div>
        <img src={`${proyect.image}`} alt="" className="rounded-lg" />
        <h3>Tecnologias usadas:</h3>
        <ul className="text-white grid grid-cols-4 lg:grid-cols-8 gap-[4px] justify-center">
          
          {proyect?.techs?.map((e) => (
            <li className="p-[6px] border-2 border-blue-800 bg-[#4d1794] rounded-lg text-center">
              {e}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Proyectos;
