"use client"

import Details from "@/components/Inicio/Contenido/Details"
import { usePathname } from "next/navigation"
import { useParams } from "next/navigation"

const detallesID = () => {

    const { id } = useParams()

  return (
    <>
        <Details id={id}/>
    </>
  )
}

export default detallesID