import HEslogan from "@/components/Home/HEslogan"
import HBeneficiosP from "@/components/Home/HBeneficiosP"
import HPortada from "@/components/Home/HPortada"
import LogoGigante from "@/components/Home/LogoGigante"
import Slide from "@/components/Home/SlidesHome/Slide"

const InicioPage = () => {
  return (
    <div className='flex flex-col border-none'>

          <HPortada />
          <HEslogan />
          <HBeneficiosP />
          <Slide />
          <LogoGigante />
 
    </div>
  )
}

export default InicioPage