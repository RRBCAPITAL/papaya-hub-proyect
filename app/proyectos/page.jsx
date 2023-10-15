"use client"

import { proyectsData } from "@/components/proyectosData/proyectosData"
import CardProyects from "@/components/CardProyects/CardProyects"
import Filtros from "@/components/Filtros/Filtros";
import { useState, useEffect } from "react";
import FiltroCategory from "@/components/Filtros/FiltroCategory";
import FiltroTechs from "@/components/Filtros/FiltroTechs";
import Reset from "@/components/Filtros/Reset";
import SearchBar from "@/components/Filtros/SearchBar";

const ProyectosPage = () => {

    console.log(proyectsData);
    // const [selectedFr, setSelectedFr] = useState("")
    // const [selectedCategories, setSelectedCategories] = useState("")
    // const [searchProyect, setSearchProyect] = useState("")

    const [filteredCards, setFilteredCards] = useState([])
    const [filteredCardsCategory, setFilteredCardsCategory] = useState([])
    const [filteredSearch, setFilteredSearch] = useState([])

    const selectedFront = (select) => {

        reset()
        // setSelectedFr(select)
        let filteredCards = proyectsData.filter(e => e.techs.includes(select)) 
        setFilteredCards(filteredCards)
    }

    const selectedCategory = (select) => {

        reset()
        // setSelectedCategories(select)
        let filteredCardsCategory = proyectsData.filter(e => e.category.includes(select))
        setFilteredCardsCategory(filteredCardsCategory)
    }

    const search = (data) => {
        
        reset()
        // setSearchProyect(data)
        let filteredSearch = proyectsData.filter(e => e.name.toLowerCase().includes(data.toLowerCase()))
        setFilteredSearch(filteredSearch)
    }

    // console.log(searchProyect);

    // let filteredCards = proyectsData.filter(e => e.techs.includes(selectedFr)) 
    // let filteredCardsCategory = proyectsData.filter(e => e.category.includes(selectedCategories))
    // let filteredSearch = proyectsData.filter(e => e.name.toLowerCase().includes(searchProyect.toLowerCase()))

    console.log(filteredCards);

    const reset = () => {

        // setSelectedFr("")
        // setSelectedCategories("")
        // setSearchProyect("")

        setFilteredCards([])
        setFilteredCardsCategory([])
        setFilteredSearch([])

    }

    console.log(filteredCards);
    console.log(filteredCardsCategory);
    console.log(filteredSearch);

    useEffect(() => {

        reset()

    }, [])
    
  return (
    <section className="flex flex-col min-h-screen">
        <div className="flex flex-col justify-center items-center gap-10 bg-[#26074e] dark:bg-[#fff]">
        <div className="mt-20 text-[#ffffff] dark:text-t-dark text-2xl sm:text-4xl font-bold text-center mx-10">
            <h1>Explora los Proyectos de Nuestros Equipos</h1>
        </div>
        {/* <Filtros selectedFront={selectedFront} selectedCategory={selectedCategory} reset={reset} search={search}/> */}
        <filters className='grid sm:grid-cols-4 items-center justify-center gap-2'>
                <FiltroCategory selectedCategory={selectedCategory}/>
                <FiltroTechs selectedFront={selectedFront}/>
                <Reset reset={reset}/>
                <SearchBar search={search}/>
        </filters>
        <div className="mb-20 min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-8 sm:mx-10 lg:mx-20">
            
            {
                filteredCards.length > 0 ? 
                
                filteredCards?.map(e => (
                    <CardProyects
                    key={e?.id}
                    id={e?.id}
                    category={e?.category}
                    name={e?.name}
                    team={e?.team}
                    techs={e?.techs}
                    descriptionMini={e?.descriptionMini}
                    image={e?.image}
                    linkYoutube={e?.linkYoutube}
                    linkProyect={e?.linkProyect}
                    />
                )) : filteredCardsCategory.length > 0 ? 
                
                filteredCardsCategory?.map(e => (
                    <CardProyects
                    key={e?.id}
                    id={e?.id}
                    category={e?.category}
                    name={e?.name}
                    team={e?.team}
                    techs={e?.techs}
                    descriptionMini={e?.descriptionMini}
                    image={e?.image}
                    linkYoutube={e?.linkYoutube}
                    linkProyect={e?.linkProyect}
                    />
                )) : filteredSearch.length > 0 ? filteredSearch?.map(e => (
                    <CardProyects
                    key={e?.id}
                    id={e?.id}
                    category={e?.category}
                    name={e?.name}
                    team={e?.team}
                    techs={e?.techs}
                    descriptionMini={e?.descriptionMini}
                    image={e?.image}
                    linkYoutube={e?.linkYoutube}
                    linkProyect={e?.linkProyect}
                    />
                )) : 
                proyectsData?.map(e => (
                    <CardProyects
                    key={e?.id}
                    id={e?.id}
                    category={e?.category}
                    name={e?.name}
                    team={e?.team}
                    techs={e?.techs}
                    descriptionMini={e?.descriptionMini}
                    image={e?.image}
                    linkYoutube={e?.linkYoutube}
                    linkProyect={e?.linkProyect}
                    />
                )) 
               
            }
        </div>
        </div>
    </section>
  )
}

export default ProyectosPage