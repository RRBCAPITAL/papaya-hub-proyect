import Link from "next/link"

const CardProyects = ({id, name, team, techs, descriptionMini, image, linkYoutube, linkProyect, category}) => {

    console.log(descriptionMini);
    console.log(linkYoutube);

  return (
    <section className="text-slate-600 p-6 sm:max-h-[600px] bg-[#ffffff] shadow-custom2 rounded-lg">
        <div className="flex flex-col items-center gap-4">
            <div className="flex justify-between w-full">
                <div className="flex gap-1">
                    <h3 className="my-2">P{id}</h3>
                    <p className="my-2">|</p>
                    <h3 className="my-2">{category}</h3>
                </div>
                <div className="flex my-auto gap-2">
                    <Link
                    href={`${linkYoutube}`}
                    target="_blank"
                    rel="noopener noreferrer">
                        <img src="/assets/youtube.png" alt="youtube" className="h-6 w-6 hover:opacity-60"/>
                    </Link>

                    <Link
                    href={`${linkProyect}`}
                    target="_blank"
                    rel="noopener noreferrer">
                        <img
                        src="/assets/exterior.png"
                        alt="enlace"
                        className="h-5 w-6 hover:opacity-60"/>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-center font-bold text-3xl">{name}</h1>
                <p className="text-slate-600 text-center">{descriptionMini}</p>
            </div>
            <img src={`${image}`} alt="" className="rounded-lg"/>
            <ul className="text-slate-600 grid grid-cols-3 sm:grid-cols-4 gap-[4px] justify-center">
                { techs?.map((e, index) => (
                  <li key={index} className="p-[8px] shadow-md text-t-dark text-[16px] rounded-full text-center">{e}</li>  
                ))}
            </ul>
            <Link href={`/proyectos/${id}`} className="w-full text-white"> 
                <button
                className="p-4 bg-[#430090] border-2 border-[#430090] rounded-lg font-bold text-[16px] w-full
                hover:bg-transparent hover:text-slate-600 duration-1000 transition-all"
                >
                    Conocer al equipo de desarrollo
                </button>
            </Link>
        </div>
    </section>
  )
}

export default CardProyects