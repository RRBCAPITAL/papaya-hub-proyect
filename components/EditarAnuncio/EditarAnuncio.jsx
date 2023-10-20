"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import {
  idiomasPrincipales,
  regiones,
  nacionalidades,
  distritos,
  preferenciasPrincipales
} from "@/Data/data";
import useCurrentUser from "@/hooks/customhooks/useCurrentUser";
import { createAnuncio } from "./createAnuncio";
import { validation } from "./validation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { RiCloseFill } from 'react-icons/ri'

const EditarAnuncio = ({ id }) => {

  const { currentUser } = useCurrentUser()

  const [anuncioEncontrado, setAnuncioEncontrado] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(anuncioEncontrado);

  const [terminoscondiciones, setTerminoscondiciones] = useState(false)
  const [filePrincipal, setFilePrincipal] = useState()
  const [galeriaImages, setGaleriaImages] = useState()
  const [formContent, setFormContent] = useState({
    
    userId: "",
    tarifaxhr: 0,
    tarifaxmr: 0,
    name: "",
    description: "",
    whatsapp: "",
    region: "",
    lugar: "",
    nacionalidad: "",
    diasAtencion: "",
    horarioInicio: "",
    horarioFin: "",
    edad: 0,
    idioma: [],
    altura: "",
    peso: "",
    questionEnd: '',
    atencion: []
  });

  useEffect(() => {
    axios.get(`/api/anuncio/${id}`)
    .then(res => setAnuncioEncontrado(res.data))
    .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (anuncioEncontrado) {
          setFormContent({
            userId: anuncioEncontrado.userId,
            tarifaxhr: anuncioEncontrado.tarifaxhr,
            tarifaxmr: anuncioEncontrado.tarifaxmr,
            name: anuncioEncontrado.name,
            description: anuncioEncontrado.description,
            whatsapp: anuncioEncontrado.whatsapp,
            region: anuncioEncontrado.region,
            lugar: anuncioEncontrado.lugar,
            nacionalidad: anuncioEncontrado.nacionalidad,
            diasAtencion: anuncioEncontrado.diasAtencion,
            horarioInicio: anuncioEncontrado.horarioInicio,
            horarioFin: anuncioEncontrado.horarioFin,
            edad: anuncioEncontrado.edad,
            idioma: anuncioEncontrado.idioma,
            altura: anuncioEncontrado.altura,
            peso: anuncioEncontrado.peso,
            questionEnd: anuncioEncontrado.questionEnd,
            atencion: anuncioEncontrado.atencion,
          });

          setSelectedImage(anuncioEncontrado.imagenPrincipal)
          setSelectedImages(anuncioEncontrado.galeriaFotos)
          setSelectedVideos(anuncioEncontrado.galeriaVideos)
          setPreviewImages(anuncioEncontrado.galeriaFotos)
          setPreviewVideos(anuncioEncontrado.galeriaVideos)
          setFilePrincipal(anuncioEncontrado.imagenPrincipal)
          setGaleriaImages(anuncioEncontrado.galeriaFotos)
        }
      }, [anuncioEncontrado]);

    console.log(anuncioEncontrado);
  
  const handleTerminosCondiciones = (e) => {
    setTerminoscondiciones(!terminoscondiciones); // Cambiar el estado entre true y false
  };

  const [error, setError] = useState({})

  useEffect(() => {
    setFormContent({
      ...formContent,
      userId: currentUser?.id
    })
  }, [currentUser])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormContent({
      ...formContent,
      [name]: value,
    });

    // Valida el campo y configura el error correspondiente
  const fieldErrors = validation({ ...formContent, [name]: value });

  setError((prev) => ({
    ...prev,
    [name]: fieldErrors[name], // Configura el error para el campo específico
  }));
    
   
  };

  const handleAtencion = (e) => {
    const { value } = e.target;

    setFormContent((prevFormData) => ({
      ...prevFormData,
      atencion: prevFormData.atencion.includes(value)
        ? prevFormData.atencion.filter((i) => i !== value)
        : [...prevFormData.atencion, value],
    }));

    // Valida la selección de idiomas y configura el error correspondiente
  const fieldErrors = validation({ ...formContent, atencion: value });
  setError((prev) => ({
    ...prev,
    atencion: fieldErrors.atencion, // Configura el error para el campo de idioma
  }));
  };

  console.log(formContent);

  const handleNacionalidad = (e) => {
    e.preventDefault();

    setFormContent({
      ...formContent,
      nacionalidad: "",
    });

    const { value } = e.target;

    if (value) {
      setFormContent({
        ...formContent,
        nacionalidad: value,
      });
    }
    
    // Valida la nacionalidad y configura el error correspondiente
  const fieldErrors = validation({ ...formContent, nacionalidad: value });
  setError((prev) => ({
    ...prev,
    nacionalidad: fieldErrors.nacionalidad, // Configura el error para la nacionalidad
  }));
  };
  console.log(formContent.nacionalidad);

  const handleDepartamento = (e) => {
    e.preventDefault();

    setFormContent({
      ...formContent,
      region: "",
    });

    const { value } = e.target;

    if (value) {
      setFormContent({
        ...formContent,
        region: value,
      });
    }

     // Valida el departamento y configura el error correspondiente
  const fieldErrors = validation({ ...formContent, region: value });
  setError((prev) => ({
    ...prev,
    region: fieldErrors.region, // Configura el error para el departamento
  }));
  };

  console.log(formContent.region);

  const handleProvincia = (e) => {
    e.preventDefault();

    setFormContent({
      ...formContent,
      lugar: "",
    });

    const { value } = e.target;

    if (value) {
      setFormContent({
        ...formContent,
        lugar: value,
      });
    }
    // Valida la provincia y configura el error correspondiente
  const fieldErrors = validation({ ...formContent, lugar: value });
  setError((prev) => ({
    ...prev,
    lugar: fieldErrors.lugar, // Configura el error para la provincia
  }));
  };

  const handleDiasDeAtencion = (e) => {
    e.preventDefault();

    setFormContent({
      ...formContent,
      diasAtencion: "",
    });

    const { value } = e.target;

    if (value) {
      setFormContent({
        ...formContent,
        diasAtencion: value,
      });
    }

     // Valida los días de atención y configura el error correspondiente
  const fieldErrors = validation({ ...formContent, diasAtencion: value });
  setError((prev) => ({
    ...prev,
    diasAtencion: fieldErrors.diasAtencion, // Configura el error para los días de atención
  }));
  };

  console.log(formContent.diasAtencion);

  const handleIdioma = (e) => {
    const { value } = e.target;

    setFormContent((prevFormData) => ({
      ...prevFormData,
      idioma: prevFormData.idioma.includes(value)
        ? prevFormData.idioma.filter((i) => i !== value)
        : [...prevFormData.idioma, value],
    }));

    // Valida la selección de idiomas y configura el error correspondiente
  const fieldErrors = validation({ ...formContent, idioma: value });
  setError((prev) => ({
    ...prev,
    idioma: fieldErrors.idioma, // Configura el error para el campo de idioma
  }));
  };

  console.log(formContent.idioma);

  const distritosEncontrados = distritos.find(
    (d) => d.name === formContent.region
  );


  const [loading, setLoading] = useState(false);

  /** VALIDACION Y FUNCION PARA CREAR IMAGEN PRINCIPAL DEL ANUNCIO */



  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    console.log(file);

    if (file) {
      // Valida la extensión del archivo
      setSelectedImage()
      setFilePrincipal()
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      const extension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        alert("El archivo debe ser una imagen en formato JPG, JPEG, PNG o GIF.");
        e.target.value = null; // Limpia la entrada de archivo
        return;
      }

      // Valida el tamaño del archivo (en bytes)
      const maxSizeKB = 800; // 800KB
      if (file.size > maxSizeKB * 1024) {
        alert(`El tamaño del archivo debe ser menor o igual a ${maxSizeKB}KB.`);
        e.target.value = null; // Limpia la entrada de archivo
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const maxWidth = 840;
          const maxHeight = 1060;

          let width = img.width;
          let height = img.height;

          // Redimensiona la imagen si excede el tamaño máximo
          if (width > maxWidth || height > maxHeight) {
            if (width / maxWidth > height / maxHeight) {
              width = maxWidth;
              height = Math.floor(maxWidth * (img.height / img.width));
            } else {
              height = maxHeight;
              width = Math.floor(maxHeight * (img.width / img.height));
            }
          }

          // Crea un lienzo de dibujo para redimensionar la imagen
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          // Convierte el lienzo de dibujo en una imagen base64
          const resizedImage = canvas.toDataURL("image/jpeg");

          setSelectedImage(resizedImage);
        };
      };

      reader.readAsDataURL(file);

    setFilePrincipal(file);

    }
  };

  console.log(filePrincipal);

   /** VALIDACION Y FUNCION PARA CREAR GALERIA DE IMAGENES DEL ANUNCIO */

   const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleImagesChange = (e) => {
    setSelectedImages([])
    const files = e.target.files;

    console.log(files);
    
    if(selectedImages?.length > 0){
      return
    }

    const updatedSelectedImages = [...selectedImages];
    const updatedPreviewImages = [...previewImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Valida el tamaño del archivo (en bytes)
      const maxSizeKB = 1000; // 800KB
      if (file.size > maxSizeKB * 1024) {
        alert(`La imagen ${file.name} excede el tamaño máximo de 1000KB.`);
        continue; // Salta este archivo y pasa al siguiente
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          // Redimensiona la imagen a 100x100 pixels
          const canvas = document.createElement("canvas");
          canvas.width = 100;
          canvas.height = 100;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, 100, 100);

          // Convierte el lienzo de dibujo en una imagen base64
          const resizedImage = canvas.toDataURL("image/jpeg");

          updatedSelectedImages.push(file);
          updatedPreviewImages.push(resizedImage);

          setSelectedImages(updatedSelectedImages);
          setPreviewImages(updatedPreviewImages);
        };
      };

      reader.readAsDataURL(file);
    }

    setGaleriaImages(files)
  };

  const removeImage = (index) => {
    // const updatedSelectedImages = [...selectedImages];
    // const updatedPreviewImages = [...previewImages];

    // updatedSelectedImages.splice(index, 1);
    // updatedPreviewImages.splice(index, 1);

    // setSelectedImages(updatedSelectedImages);
    // setPreviewImages(updatedPreviewImages);

    setSelectedImages([])

  };

  // FUNCION PARA CREAR GALERIA DE VIDEOS

  const [selectedVideos, setSelectedVideos] = useState([]);
  const [previewVideos, setPreviewVideos] = useState([]);

  const handleVideosChange = (e) => {

    setSelectedVideos([])

    const files = e.target.files;
    if(selectedVideos?.length > 0){
      return
    }
    const updatedSelectedVideos = [...selectedVideos];
    const updatedPreviewVideos = [...previewVideos];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Valida el tamaño del archivo (en bytes)
      const maxSizeMB = 20; // 20 MB
      if (file.size > maxSizeMB * 1024 * 1024) {
        alert(`El video ${file.name} excede el tamaño máximo de ${maxSizeMB} MB.`);
        continue; // Salta este archivo y pasa al siguiente
      }

      // Agregar el video a la lista de selección y vista previa
      updatedSelectedVideos.push(file);
      updatedPreviewVideos.push(URL.createObjectURL(file));
    }

    // Limitar la selección de videos a un máximo de 3
    const limitedSelectedVideos = updatedSelectedVideos.slice(0, 3);
    const limitedPreviewVideos = updatedPreviewVideos.slice(0, 3);

    setSelectedVideos(limitedSelectedVideos);
    setPreviewVideos(limitedPreviewVideos);
  };

  const removeVideo = () => {
    // const updatedSelectedVideos = [...selectedVideos];
    // const updatedPreviewVideos = [...previewVideos];

    // updatedSelectedVideos.splice(index, 1);
    // updatedPreviewVideos.splice(index, 1);

    // setSelectedVideos(updatedSelectedVideos);
    // setPreviewVideos(updatedPreviewVideos);

    setSelectedVideos([])
  };

  console.log(selectedVideos);

  /** SUBMIT PARA CREAR ANUNCIO */

  
  function esArrayDeLinksCloudinary(variable) {
    if (!Array.isArray(variable)) {
      return false; // La variable no es un array
    }
  
    // Verifica que todos los elementos del array sean cadenas de enlaces de Cloudinary
    for (let i = 0; i < variable.length; i++) {
      if (typeof variable[i] !== 'string' || !variable[i].includes('https://res.cloudinary.com/')) {
        return false; // Uno de los elementos no es una cadena de enlace de Cloudinary
      }
    }
  
    return true; // Todos los elementos son enlaces de Cloudinary
  }

  const actionCreateGaleriaVideos = async () => {

    try {
     
      if(esArrayDeLinksCloudinary(selectedVideos)){

        return selectedVideos;
      }
      
      const formData= new FormData();
      for (const video of selectedVideos) {
        formData.append('file', video);
      }
  
      console.log(formData);
  
      const resGaleria = await fetch('api/anuncio/galeria-videos', {
        method: "POST",
        body: formData,
      })
  
      const dataG = await resGaleria.json()
  
      console.log(dataG);
      
      console.log(dataG.videosUrl)
  
      return dataG.videosUrl;
      
    } catch (error) {
      console.log(error);
    }
  }

  const actionCreateGaleriaImages = async () => {

    try {

      if(esArrayDeLinksCloudinary(selectedImages)){
  
        return selectedImages;
      }
      
      const formData = new FormData();
      for (const image of selectedImages) {
        formData.append('file', image);
      }
  
      const resGaleria = await fetch('api/anuncio/galeria', {
        method: "POST",
        body: formData,
      });
  
      const dataG = await resGaleria.json();

      return dataG.imagesUrl;
      
    } catch (error) {
      console.log(error);
    }
  }

/* Funcion para limpiar contenido */

  const clean = () => {
    setFormContent({
      userId: "",
      tarifaxhr: 0,
      name: "",
      description: "",
      whatsapp: "",
      region: "",
      lugar: "",
      nacionalidad: "",
      diasAtencion: "",
      horarioInicio: "",
      horarioFin: "",
      edad: 0,
      idioma: [],
      altura: "",
      peso: "",
      imagenPrincipal: "",
      galeriaFotos: [],
      galeriaVideos: [],
    })

    setSelectedImage("")
    setSelectedImages([])
    setSelectedVideos([])
  }

  useEffect(() => {
    setError(validation(formContent));
  }, [formContent]);

  /*Ejecucion para crear anuncio */

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if(terminoscondiciones){
        if(formContent?.questionEnd?.length > 0){
          console.log(error);
      
        if(Object.keys(error).length > 0){
          toast.error('Error, por favor revise los campos.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            style: {
              background: '#ff3d64', // Cambia el color de fondo de la notificación
              color: 'white',     // Cambia el color del texto de la notificación
            },
          });
        } else{
    
          // que haya una rueda girando con un mensaje que indique que estan cargando los archivos de su anuncio
          clean()
           //Galeria de imagenes y videos
           setLoading(true); // Iniciar carga
    
           // Esperar a que ambas funciones de carga se completen
           const [galeriaVideosUrl, galeriaImagesUrl] = await Promise.all([
            actionCreateGaleriaVideos(),
            actionCreateGaleriaImages(),
          ]);
    
          if(filePrincipal?.length > 10){
          // Imagen principal
      
        // Actualizar formContent con las URLs de las galerías
        const updatedFormContent = {
          ...formContent,
          imagenPrincipal: filePrincipal,
          galeriaVideos: galeriaVideosUrl,
          galeriaFotos: galeriaImagesUrl,
        };
    
        console.log(updatedFormContent);

        createAnuncio(updatedFormContent, id)
    
          // Finalizar carga
          setLoading(false);
          setShowModal(true)
          // setLoading(false); // Finalizar carga
          return
          }
            // Imagen principal
          
        const formData = new FormData()
        formData.append('file', filePrincipal)
    
        console.log(filePrincipal);
    
        console.log(formData);
    
        const res = await fetch('/api/anuncio/imagen-principal', {
          method: "POST",
          body: formData,
        })

        
        
        const data = await res.json()
        console.log(res);
        console.log(data);
        console.log(data.imageUrl)
    
        const imageUrl = data.imageUrl
    
        //Update de formContent
    
        // const updatedFormContent = {
        //   ...formContent,
        //   imagenPrincipal: imageUrl,
        // };
    
        // Actualizar formContent con las URLs de las galerías
        const updatedFormContent = {
          ...formContent,
          imagenPrincipal: imageUrl,
          galeriaVideos: galeriaVideosUrl,
          galeriaFotos: galeriaImagesUrl,
        };

        console.log(updatedFormContent);

        createAnuncio(updatedFormContent, id)
    
        // Finalizar carga
        setLoading(false);
        setShowModal(true)
        // setLoading(false); // Finalizar carga
        return
          
    
        }
        }else{
          toast.error('Responde la pregunta obligatoria para continuar.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            style: {
              background: '#ff3d64', // Cambia el color de fondo de la notificación
              color: 'white',     // Cambia el color del texto de la notificación
            },
          });
        }
      }else{
        toast.error('Acepta los términos y condiciones para continuar.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          style: {
            background: '#ff3d64', // Cambia el color de fondo de la notificación
            color: 'white',     // Cambia el color del texto de la notificación
          },
        });
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleClean = () => {
    clean();
    toast.success('Se limpiaron todos los campos.', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      style: {
        background: '#ff7801', // Cambia el color de fondo de la notificación
        color: 'white',     // Cambia el color del texto de la notificación
      },
    });
  }


  return (
    
    <containert className="relative flex dark:bg-dark-d bg-white">
      {showModal && (
          <div className="z-100 fixed bg-[#000000e6] flex h-full w-screen items-center justify-center text-white">
       
            <section className="relative bg-[#144912] border-4 border-[#63ff41] p-10 flex flex-col items-center justify-center gap-1 mx-4">
            <Link href={'/dashboard-de-usuario'} className="absolute text-red-500 font-bold top-0 right-0 text-xl p-1 bg-black hover:scale-105" >
              <RiCloseFill />
            </Link>
            <ok className='flex flex-col items-center justify-center gap-1 mt-2'>
            <img width="28" height="28" src="/assets/check.gif" alt="high-priority"/>
              <nav className="text-center text-3xl lg:text-4xl font-extrabold">Actualización exitosa</nav>
              
            </ok>
            <inactive className='flex flex-col items-center justify-center gap-1'>
              <nav className="text-center font-extralight text-sm">Ya puedes revisar tu anuncio actualizado.</nav>
            </inactive>
            <buttons className='flex gap-2 mt-4'>
              <Link href={'/dashboard-de-usuario'} className="p-4 bg-red-500 hover:bg-red-600 rounded text-center font-extrabold">Ver anuncio</Link>
            </buttons>
            </section>            
          </div>
          )}
      {loading && (
          <div className="z-100 fixed bg-[#000000e6] flex h-full w-screen items-center justify-center text-white font-extrabold">
       
            <nav className=" absolute text-center text-2xl lg:text-3xl">Actualizando anuncio</nav>
            <div class="flex flex-row gap-2 mt-[100px] lg:mt-[120px]">
              <div class="w-10 h-10 rounded-full bg-back-red animate-bounce [animation-delay:.7s]"></div>
              <div class="w-10 h-10 rounded-full bg-back-red animate-bounce [animation-delay:.3s]"></div>
              <div class="w-10 h-10 rounded-full bg-back-red animate-bounce [animation-delay:.7s]"></div>
            </div>
          </div>
          )}
      <contain className=" w-screen min-h-screen flex flex-col items-center">
      
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
        <titulo className="dark:text-white text-black mt-[100px] font-bold text-3xl border-b-4 border-bor-red">
          <strong className="text-t-red">EDITAR</strong> ANUNCIO
        </titulo>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="m-5 flex flex-col dark:bg-dark-l bg-[#fffef4] sm:max-w-[80%] lg:max-w-[50%] shadow-custom1 rounded-[10px] px-5 items-center gap-2"
        >
          <containerform className=" grid sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="dark:text-white text-black">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formContent?.name}
                onChange={handleChange}
                placeholder="Jenny Montero"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] border-2 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-bor-red rounded-[10px] outline-none"
                
              />
              { error && error?.name ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.name}</p> : ""}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="dark:text-white text-black">Tarifa por hora (en soles):</label>
              <input
                type="number"
                id="tarifaxhr"
                name="tarifaxhr"
                value={formContent.tarifaxhr}
                onChange={handleChange}
                placeholder="S/200"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] bg-white dark:text-white text-black dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
                
              />
               { error && error?.tarifaxhr ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.tarifaxhr}</p> : ""}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="dark:text-white text-black">Tarifa por media hora (en soles):</label>
              <input
                type="number"
                id="tarifaxmr"
                name="tarifaxmr"
                value={formContent.tarifaxmr}
                onChange={handleChange}
                placeholder="S/200"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] bg-white dark:text-white text-black dark:bg-dark-d focus:dark:text-white focustext-black border-2 border-bor-red rounded-[10px] outline-none"
                
              />
               { error && error?.tarifaxmr ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.tarifaxmr}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black">Número de WhatsApp:</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formContent.whatsapp}
                onChange={handleChange}
                placeholder="924125323"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] border-2 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-bor-red rounded-[10px] outline-none"
                x
              />
              { error && error.whatsapp ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error.whatsapp}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black">Descripción:</label>
              <textarea
                type="text"
                id="description"
                name="description"
                cols="10"
                rows="7"
                value={formContent.description}
                onChange={handleChange}
                style={{ resize: 'none' }}
                placeholder="💓Mi nombre es Jenny 😄Un poco loca😋Creo que solo tenemos una vida y necesitamos vivirla al máximo! ¿Quieres chatear conmigo? escríbeme aquí https://fans.ly/r/jenny Sueño con convertirme en tu modelo
                favorita❤️ Ofertas comerciales: jenny@gmail.com​"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
                
              />
              { error && error?.description ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.description}</p> : ""}
            </div>

            <atencion className="flex flex-col gap-[12px]">
              <h1 className="dark:text-white text-black" >Horario de atención</h1>
              <containerhorarioatencion className="dark:bg-back-red bg-[#2c2c2c] p-4 rounded-[10px] grid gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="dark:text-white text-black">Días:</label>
                  <select
                    name="diasAtencion"
                    id="diasAtencion"
                    value={formContent.diasAtencion}
                    onChange={handleDiasDeAtencion}
                    className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
                  >
                    <option value="">
                      Selecciona
                    </option>
                    <option value="Todos los días">Todos los días</option>
                    <option value="Lunes a viernes">Lunes a viernes</option>
                    <option value="Solo sábados">Solo sábados</option>
                    <option value="Solo domingos">Solo domingos</option>
                    <option value="Sábados y domingos">
                      Sábados y domingos
                    </option>
                  </select>
                  { error && error?.diasAtencion ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.diasAtencion}</p> : ""}
                </div>

                <div className="flex gap-6 mx-auto">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="horarioInicio" className="dark:text-white text-black">Hora de inicio:</label>
                    <input
                      type="time"
                      id="horarioInicio"
                      name="horarioInicio"
                      value={formContent.horarioInicio}
                      onChange={handleChange}
                      className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
                      
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="horarioFin" className="dark:text-white text-black">Hora de cierre:</label>
                    <input
                      type="time"
                      id="horarioFin"
                      name="horarioFin"
                      value={formContent.horarioFin}
                      onChange={handleChange}
                      className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
                      
                    />
                  </div>
                </div>
              </containerhorarioatencion>
            </atencion>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black">Preferencias de atención</label>
              <div className="bg-back-red dark:bg-[#2c2c2c] p-4 rounded-[10px] flex gap-2 text-sm items-center justify-center dark:text-white text-black">
                {preferenciasPrincipales.map((i) => (
                  <div key={i} className="flex gap-1">
                    <label htmlFor={i}>{i}</label>
                    <input
                      type="checkbox"
                      name="atencion"
                      id={i}
                      value={i}
                      checked={formContent?.atencion?.includes(i)}
                      onChange={handleAtencion}
                    />
                  </div>
                ))}
              </div>
              { error && error?.atencion ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.atencion}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black">Nacionalidad de la chica:</label>
              <select
                name="nacionalidad"
                id="nacionalidad"
                value={formContent.nacionalidad}
                onChange={handleNacionalidad}
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
              >
                <option value="">Selecciona una nacionalidad</option>
                {nacionalidades.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              { error && error?.nacionalidad ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.nacionalidad}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black">Departamento de atención:</label>
              <select
                name="region"
                id="region"
                value={formContent.region}
                onChange={handleDepartamento}
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
              >
                <option value="">Selecciona un departamento</option>
                {regiones.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              { error && error?.region ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.region}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black">Provincia de atención:</label>
              <select
                name="lugar"
                id="lugar"
                value={formContent.lugar}
                onChange={handleProvincia}
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
              >
                <option value="">Selecciona una provincia</option>
                {distritosEncontrados &&
                  distritosEncontrados.places.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
              </select>
              { error && error?.lugar ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.lugar}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black">Edad en años:</label>
              <input
                type="number"
                id="edad"
                name="edad"
                value={formContent.edad}
                onChange={handleChange}
                placeholder="25"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
                
              />
               { error && error.edad ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error.edad}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black">Selecciona los idiomas que domine:</label>
              <div className="bg-back-red dark:bg-[#2c2c2c] p-4 rounded-[10px] flex gap-2 text-sm items-center justify-center dark:text-white text-black">
                {idiomasPrincipales.map((i) => (
                  <div key={i} className="flex gap-2">
                    <label htmlFor={i}>{i}</label>
                    <input
                      type="checkbox"
                      name="idioma"
                      id={i}
                      value={i}
                      checked={formContent?.idioma?.includes(i)}
                      onChange={handleIdioma}
                      className=""
                    />
                  </div>
                ))}
              </div>
              { error && error?.idioma ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.idioma}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black ">Peso en kg:</label>
              <input
                type="text"
                id="peso"
                name="peso"
                value={formContent.peso}
                onChange={handleChange}
                placeholder="48"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
               
              />
              { error && error.peso ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error.peso}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="dark:text-white text-black">Altura:</label>
              <input
                type="text"
                id="altura"
                name="altura"
                value={formContent.altura}
                onChange={handleChange}
                placeholder="1.78"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
              
              />
              { error && error.altura ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error.altura}</p> : ""}
            </div>
                  {/* Imagen principal */}
            <div className="flex flex-col gap-2">
      <label htmlFor="name" className="dark:text-white text-black flex gap-4">Imagen principal <nav className="dark:text-white text-black text-sm">(Ancho: 840px, Alto: 1060px)</nav></label>
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/jpeg, image/png, image/gif"
        className="p-[10px] border-2 dark:text-white text-black border-bor-red rounded-[10px] outline-none"
      />
      {selectedImage && (
        <div>
          <h2 className="dark:text-white text-black">Imagen seleccionada:</h2>
          <img src={selectedImage} alt="Vista previa de la imagen" />
        </div>
      )
    }
      {/* { error && error.imagenPrincipal ? <p className="text-white text-center font-mono text-[12px] p-1 bg-back-redd w-auto ">{error.imagenPrincipal}</p> : ""} */}
    </div>

                  {/* Galería de imagenes */}
    <div className="flex flex-col gap-2">
      <label htmlFor="name" className="dark:text-white text-black">Galería de fotos (max. 6 fotos)</label>
      <input
        type="file"
        onChange={handleImagesChange}
        multiple
        accept="image/jpeg, image/png, image/gif"
        className="p-[10px] border-2 dark:text-white text-black border-bor-red rounded-[10px] outline-none focus:ring focus:ring-blue-300"
      />
      {selectedImages.length > 0 && (
        <div>
          <h2 className="dark:text-white text-black">Fotos seleccionadas:</h2>
          <div className="relative flex flex-wrap gap-2 border-2 border-red-500 p-4 rounded-xl">
            {selectedImages?.map((image, index) => (
              <div key={index} className="relative">
                <img src={previewImages[index]} alt={`Foto ${index + 1}`} className="w-[100px] h-[100px]"/>
               
              </div>
            ))}
             <button
                  className="absolute top-0 right-0 p-1 w-fit bg-red-500 text-white rounded-[20px]"
                  onClick={() => removeImage()}
                  type="button"
                >
                  X
                </button>
          </div>
        </div>
      )}
    </div>

             {/* Galería de videos */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="dark:text-white text-black">
          Galería de videos (máximo 3 videos, máximo de 20MB / uno):
        </label>
        <input
          type="file"
          onChange={handleVideosChange}
          multiple
          accept="video/*"
          className="p-[10px] border-2 dark:text-white text-black border-bor-red rounded-[10px] outline-none focus:ring focus:ring-blue-300"
        />
        {selectedVideos.length > 0 && (
          <div>
            <h2 className="dark:text-white text-black">Videos seleccionados:</h2>
            <div className="relative flex flex-wrap gap-2 border-2 border-red-500 p-4 rounded-xl">
              {selectedVideos.map((video, index) => (
                <div key={index} className="relative">
                  <video
                    src={previewVideos[index]}
                    controls
                    className="max-w-full h-[200px]"
                  />
                  
                </div>
              ))}
              <button
                    className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                    onClick={() => removeVideo()}
                    type="button"
                  >
                    X
                  </button>
            </div>
          </div>
        )}
      </div>

          </containerform>
          
          <preguntaobligatoria className='mb-5 flex flex-col sm:flex-row gap-4 items-center justify-center'>
                <div className="flex flex-col gap-2 items-center justify-center dark:text-white text-black">
                <h1 className="text-xl font-bold">¿Cómo te enteraste de nosotros?</h1>
                <h6 className="text-sm">(Pregunta obligatoria para continuar)</h6>
                </div>
                <textarea
                type="text"
                id="questionEnd"
                name="questionEnd"
                cols="20"
                rows="3"
                value={formContent.questionEnd}
                onChange={handleChange}
                style={{ resize: 'none' }}
                placeholder="Me enteré de ustedes por medio de un anuncio de facebook...​"
                className="focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-4 dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black border-2 border-bor-red rounded-[10px] outline-none"
                
              />
          </preguntaobligatoria>

          <terminoscondiciones className="flex flex-col items-center gap-2 mb-5 font-bold dark:text-white text-black ">
                 <div className="flex gap-2">
                 <input type="radio"
                      value={terminoscondiciones} checked={terminoscondiciones} onChange={handleTerminosCondiciones}/>
                  <h1>He leído y acepto los términos y condiciones</h1>
                 </div>
                  <Link target="_blank" href={'https://drive.google.com/file/d/1IToRVqTx7j2mQ1FWvankDMRzwcYqE_zd/view?usp=sharing'} className={`text-sm text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out`}>Leer términos y condiciones</Link>
          </terminoscondiciones>
          
          {/* Agrega más campos del anuncio aquí */}
          <containbuttons className="grid grid-cols-2 gap-2">
          <Link href={'/dashboard-de-usuario'} type="button" onClick={handleClean} className="bg-red-500 shadow-normal p-4 rounded-[10px] text-white text-center hover:bg-red-600 font-bold mb-10">
              Cancelar
            </Link>
            {/* <button type="button" onClick={handleClean} className="bg-yellow-50 shadow-normal p-4 rounded-[10px] text-t-red hover:bg-[#fff] font-bold mb-10">
              Limpiar
            </button> */}
            <button
              type="submit"
              className="bg-back-red shadow-normal red p-4 rounded-[10px] text-white hover:bg-[#ff8c57] font-bold mb-10"
            >
              Actualizar Anuncio
            </button>
          </containbuttons>
        </form>


      </contain>
    </containert>
  );
};

export default EditarAnuncio;
