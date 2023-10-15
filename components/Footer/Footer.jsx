import Link from "next/link"
import { AiFillFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer text-white bg-back-red pt-[2rem] lg:pt-[5rem] text-[1rem]'>
        <div className='grid sm:grid-cols-4 mx-20 gap-10 sm:gap-20'>
            <div className='footer-1'>
                <Link href={'/'} className="flex flex-col gap-4 max-w-[180px]">
                    <h4 className="text-2xl font-extrabold">Papaya Hub</h4>
                    <p>Somos la mejor plataforma para ti, amamos lo que hacemos.</p>
                </Link>
            </div>  

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-extrabold">Enlaces</h4>
                <ul className="flex flex-col gap-4">
                    {/* <li><Link href={'/'}>Inicio</Link></li> */}
                    <li><Link href={'/'}>Chicas</Link></li>
                    <li><Link href={'/reportar'}>Reportar</Link></li>
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-extrabold">Primacy</h4>
                <ul className="flex flex-col gap-4">
                    {/* <li><Link href={'/'}>Política de privacidad</Link></li> */}
                    <li><Link target="_blank" href={'https://drive.google.com/file/d/1H1T-qnLR4bL4JWBkqTff3pnf8qfCqUA_/view'}>Términos y condiciones</Link></li>
                    {/* <li><Link href={'/faqs'}>Política de reembolso</Link></li> */}
                </ul>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-xl font-extrabold">Contacto</h4>
                <div className="flex flex-col gap-4">
                    <p className="sm:text-[10px] lg:text-[16px]">rrbcapital24@gmail.com</p>
                    {/* <h3>Mensaje :</h3>
                    <input type="text" placeholder="Escribe tu correo" className="p-[0.8rem] max-w-[260px] rounded bg-slate-900 text-white outline-none"/>
                    <textarea
                                className="min-h-[100px] max-w-[260px] p-[0.8rem] rounded bg-slate-900 outline-none"
                                name=""
                                id=""
                                placeholder="Escribe tu mensaje"
                                style={{ resize: "none" }}
                              />
                    <button className="p-[0.8rem] max-w-[260px] rounded bg-slate-900 hover:bg-[#6f01ff] border-2 border-[#6f01ff] text-white outline-none">Enviar</button> */}
                </div>

                {/* <ul className="socials">
                    <li><Link href={'/'}><AiFillFacebook /></Link></li>
                </ul> */}
            </div>
  
        </div>
        <div className="text-center mt-[4rem] py-[0.8rem] border-t border-slate-500 w-full">
                <small>Copyright &copy; Papaya Hub 2023</small>
        </div>
        
    </footer>
  )
}

export default Footer