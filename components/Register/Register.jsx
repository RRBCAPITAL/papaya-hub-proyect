"use client"

import style from "./Register.module.css"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { HiFingerPrint, HiAtSymbol, HiOutlineUser } from "react-icons/hi";

const Register = () => {

    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)

  return (
    <div className='z-20 flex flex-col w-screen items-center justify-center min-h-screen'>
     <div className="mx-auto mt-4 rounded bg-slate-50 w-11/12 sm:w-3/5 sm:h-3/4 grid lg:grid-cols-2">
      <div className="right flex flex-col justify-evenly bg-gray-50">
        <div className="text-center py-10">
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Regístrate</h1>
                </div>
                <form action="" className="flex flex-col gap-5">
                    <div className={style.inputGroup}>
                        <input
                        type="text"
                        name="email"
                        placeholder="usuario"
                        className={style.inputText}
                        />
                        <span className="icon flex items-center bg-slate-100 px-4">
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    <div className={style.inputGroup}>
                        <input
                        type="email"
                        name="email"
                        placeholder="correo"
                        className={style.inputText}
                        />
                        <span className="icon flex items-center bg-slate-100 px-4">
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    <div className={style.inputGroup}>
                        <input
                        type={ show1 ? "text" : "password"}
                        name="password1"
                        placeholder="contraseña"
                        className={style.inputText}
                        />
                        <span className="icon flex items-center bg-slate-100 px-4"
                            onClick={() => setShow1(!show1)}
                        >
                            <HiFingerPrint size={25}/>
                        </span>
                    </div>
                    <div className={style.inputGroup}>
                        <input
                        type={ show2 ? "text" : "password"}
                        name="password2"
                        placeholder="confirma tu contraseña"
                        className={style.inputText}
                        />
                        <span className="icon flex items-center bg-slate-100 px-4"
                            onClick={() => setShow2(!show2)}
                        >
                            <HiFingerPrint size={25}/>
                        </span>
                    </div>
                    <div >
                        <button type="submit" className={style.inputButton}>
                            Iniciar sesión
                        </button>
                    </div>
                </form>

                    <p className="text-center text-gray-400">
                    ¿Ya tienes una cuenta? <Link href={'/login'} className="text-blue-700">Iniciar sesión</Link>
                    </p>

            </section>
        </div>
      </div>

      <div className={style.containImg}>
        <div className={style.detailImg}></div>
        <Link href={'/'} className="hidden lg:block bg-[#26074e] hover:bg-[#370c70] hover:border-2 hover:border-[#26074e]
        text-white rounded-[10px] z-50 p-[0.5rem] my-2 w-[180px] text-center mx-auto text-xl font-bold">Volver al inicio</Link>
      </div>
     </div>
    </div>
  )
}

export default Register