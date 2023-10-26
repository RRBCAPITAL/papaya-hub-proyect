"use client"

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({ selectedAtencion, textSearch, setResultadosEncontrados, setNothingFound, setModalFilterOpen, selectedNacionalidad, selectedRegion, selectedLugar, selectedIdioma }) => {

    const [ anuncios, setAnuncios ] = useState()
    const [filteredAnuncios, setFilteredAnuncios] = useState([]);
  
    // useEffect(() => {
    //     fetch('/api/anuncio')
    //     .then(data => data.json())
    //     .then(({ data })=> setAnuncios(data))
    // }, [])

    useEffect(() => {
      const anuncioStorage = localStorage.getItem('anuncioStorage')
      const LocalUpdatedAnuncio = localStorage.getItem('updatedAnuncio')
      const updatedAnuncio = JSON.parse(LocalUpdatedAnuncio)
  
      console.log(updatedAnuncio);
  
      if(!anuncioStorage || updatedAnuncio){
        fetch("/api/anuncio")
        .then((data) => data.json())
        .then(({ data }) => {
          setAnuncios(data);
          localStorage.setItem("anuncioStorage", JSON.stringify(data));
          localStorage.removeItem("updatedAnuncio")
        });
      }
  
      const parsedAnuncios = JSON.parse(anuncioStorage)
      if(!anuncios || anuncios?.length === 0){
        setAnuncios(parsedAnuncios)
      }
  
    }, []);

    useEffect(() => {
      // Filtra los anuncios basados en los filtros seleccionados
      const filteredAnun = anuncios?.filter((a) => {
       
       if(a?.nivel === 'SIMPLE' || a?.nivel === 'MOTOMAMI' || a?.nivel === 'BICHOTA'){
         // Nacionalidad
         if (selectedNacionalidad && a?.nacionalidad !== selectedNacionalidad) {
          return false;
        }
        // Departamento
        if (selectedRegion && a?.region !== selectedRegion) {
          return false;
        }
        // Lugar (Distrito)
        if (selectedLugar && a?.lugar !== selectedLugar) {
          return false;
        }
        // Idioma
        if (selectedIdioma && !a?.idioma.includes(selectedIdioma)) {
          return false;
        }
        // Atencion
        if (selectedAtencion && !a?.atencion.includes(selectedAtencion)) {
          return false;
        }
        setNothingFound(false)
        setResultadosEncontrados(true)
        return true;
       }

      });
 
      if(filteredAnun?.length === 0 || !filteredAnun){
        setNothingFound(true); // Establecer nothingFound en true si no se encontraron resultados
        setResultadosEncontrados(false); 
      }

      setNothingFound(false); // Establecer nothingFound en false si se encontraron resultados
      setResultadosEncontrados(true);

      const anunciosSimplesH = filteredAnun?.filter((s) => s.nivel === 'SIMPLE') || [];
      const anunciosMotoMamiH = filteredAnun?.filter((s) => s.nivel === 'MOTOMAMI') || [];
      const anunciosBichotaH = filteredAnun?.filter((s) => s.nivel === 'BICHOTA') || [];
      const anunciosSegunNivelH = [
        ...anunciosBichotaH,
        ...anunciosMotoMamiH,
        ...anunciosSimplesH,
      ];
    
      if(anunciosSegunNivelH?.length > 0){
        setFilteredAnuncios(anunciosSegunNivelH);
        setModalFilterOpen(false)
        setFilteredAnuncios(filteredAnun);
      }
      
      

    }, [selectedNacionalidad, selectedRegion, selectedLugar, selectedIdioma, selectedAtencion, anuncios]);
    
    
  // Filtrar los anuncios según el valor de búsqueda
  useEffect(() => {
    if (textSearch) {
      const filtroSearchBar = anuncios.filter(
        (a) =>
          a.name?.toLowerCase().includes(textSearch.toLowerCase()) ||
          (a.id && a.id.startsWith(textSearch.substring(0, 7)))
      );
      

      if (filtroSearchBar.length > 0) {
        setFilteredAnuncios(filtroSearchBar);
        toast.success('Se encontraron chicas.', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        });
      } else {
        toast.error('No se encontró ninguna chica....', {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          style: {
            background: '#ff3d64',
            color: 'white',
          },
        });
      }
    } else {
      setFilteredAnuncios([])
      // Si no hay valor de búsqueda, mostrar todos los anuncios en el orden deseado
      const anunciosSimples = anuncios?.filter((s) => s.nivel === 'SIMPLE') || [];
      const anunciosMotoMami = anuncios?.filter((s) => s.nivel === 'MOTOMAMI') || [];
      const anunciosBichota = anuncios?.filter((s) => s.nivel === 'BICHOTA') || [];
      const anunciosSegunNivel = [
        ...anunciosBichota,
        ...anunciosMotoMami,
        ...anunciosSimples,
      ];
      setFilteredAnuncios(anunciosSegunNivel);
    }
  }, [textSearch, anuncios]);


    return(
    <containertotal className='flex w-screen overflow-x-hidden'>
        <contain className='flex justify-center min-h-screen max-w-screen dark:bg-dark-l bg-[#fff]'>
        <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
                <containcards className='w-[80%] mt-4 mb-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                {filteredAnuncios?.length > 0 ? (
            filteredAnuncios.map((a) => (
              <Card
                key={a.id}
                id={a.id}
                imagenPrincipal={a.imagenPrincipal}
                name={a.name}
                nacionalidad={a.nacionalidad}
                lugar={a.lugar}
                edad={a.edad}
                tarifaxhr={a.tarifaxhr}
                region={a.region}
                nivel={a.nivel}
                whatsapp={a?.whatsapp}
              />
            ))
          ) : ""}
                </containcards>
        </contain>
        
    </containertotal>
  )
}

export default Cards