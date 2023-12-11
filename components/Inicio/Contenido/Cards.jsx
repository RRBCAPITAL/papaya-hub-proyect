"use client"

import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Masonry from 'react-masonry-css';
import './stylecards.css'

const Cards = ({ selectedAtencion, textSearch, setResultadosEncontrados, setNothingFound, setModalFilterOpen, selectedNacionalidad, selectedRegion, selectedLugar, selectedIdioma }) => {

    const [ anuncios, setAnuncios ] = useState()
    const [filteredAnuncios, setFilteredAnuncios] = useState([]);
    const [updatedAnuncio, setUpdatedAnuncio] = useState(false);
    const [listen, setListen] = useState(false)

    // useEffect(() => {
    //     fetch('/api/anuncio')
    //     .then(data => data.json())
    //     .then(({ data })=> setAnuncios(data))
    // }, [])

    useEffect(() => {
      setTimeout(() => {
        setListen(!listen)
        localStorage.removeItem('anuncioStorage')
          fetch("/api/anuncio")
            .then((data) => data.json())
            .then(({ data }) => {
              setAnuncios(data)
              localStorage.setItem("anuncioStorage", JSON.stringify(data));
              localStorage.removeItem("updatedAnuncio");
            });
      }, 60000)
    }, [listen])

    useEffect(() => {
      const anuncioStorage = localStorage.getItem('anuncioStorage');
      const LocalUpdatedAnuncio = localStorage.getItem('updatedAnuncio');
      const parsedUpdatedAnuncio = JSON.parse(LocalUpdatedAnuncio);
  
      if (parsedUpdatedAnuncio !== updatedAnuncio) {
        setUpdatedAnuncio(parsedUpdatedAnuncio);
      }
  
      console.log(updatedAnuncio);
  
      if (!anuncioStorage || updatedAnuncio) {
        fetch("/api/anuncio")
          .then((data) => data.json())
          .then(({ data }) => {
            setAnuncios(data)
            localStorage.setItem("anuncioStorage", JSON.stringify(data));
            localStorage.removeItem("updatedAnuncio");
          });
      }
  
      if(!anuncios){
        const anunciosS = JSON.parse(anuncioStorage);
        setAnuncios(anunciosS)
      }
  
    }, [updatedAnuncio]);
  
    useEffect(() => {
  
      window.addEventListener('beforeunload', () => {
        localStorage.removeItem("anuncioStorage")
        // fetch("/api/anuncio")
        //   .then((data) => data.json())
        //   .then(({ data }) => {
        //     setAnuncios(data)
        //     localStorage.setItem("anuncioStorage", JSON.stringify(data));
        //     localStorage.removeItem("updatedAnuncio");
        //   });
      });
    }, [])
    
    console.log(anuncios);

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
      function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
      const textSearchWithoutAccents = removeAccents(textSearch.toLowerCase());
      
      const filtroSearchBar = anuncios?.filter((a) => {
        if (a?.nivel === 'SIMPLE' || a?.nivel === 'MOTOMAMI' || a?.nivel === 'BICHOTA') {
          const nameWithoutAccents = removeAccents(a?.name)?.toLowerCase();
          const lugarWithoutAccents = removeAccents(a?.lugar)?.toLowerCase();
          const regionWithoutAccents = removeAccents(a?.region)?.toLowerCase();
          
          // Comprueba si alguna de las propiedades cumple con la condición de búsqueda
          return (
            nameWithoutAccents.includes(textSearchWithoutAccents) ||
            lugarWithoutAccents.includes(textSearchWithoutAccents) ||
            regionWithoutAccents.includes(textSearchWithoutAccents) ||
            a.name?.toLowerCase().includes(textSearch.toLowerCase()) ||
            (a.idFrontend && a.idFrontend.toLowerCase().startsWith(textSearch.toLowerCase()))
          );
        }
        // Si no cumple la condición, no se incluirá en el filtro
        return false;
      });
      

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

  const breakpointColumnsObj = {
    default: 4, // Número de columnas por defecto
    1500: 4,
    1200: 3, // Cambiar a 4 columnas en pantallas de 1200px o menos
    992: 2, // Cambiar a 3 columnas en pantallas de 992px o menos
    768: 2, // Cambiar a 2 columnas en pantallas de 768px o menos
    610: 2, // Cambiar a 2 columnas en pantallas de 768px o menos
  };
  
  return (
    <containertotal className="flex w-screen overflow-x-hidden mt-[200px] mb-10">
      <contain className="flex justify-center min-h-screen w-screen bg-dark-l dark:bg-[#fff]">
        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
        <Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid w-[82%]"
    columnClassName="my-masonry-grid_column"
  >
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
           </Masonry>
      </contain>
    </containertotal>
  )
}

export default Cards