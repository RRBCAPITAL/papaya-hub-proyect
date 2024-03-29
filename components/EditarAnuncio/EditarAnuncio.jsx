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
import { createAnuncio } from "./createAnuncio";
import { validation } from "./validation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import { RiCloseFill } from 'react-icons/ri'
import { CldUploadButton } from 'next-cloudinary'
import { FaUpload } from 'react-icons/fa'
import { ordenarDiasYGenerarString } from "../FormCreates/Anuncios/ordenarDiasYGenerarString";
import { useParams } from "next/navigation";

const EditarAnuncio = () => {

  const params = useParams()
  const [currentUser, setCurrentUser] = useState(null)
  const [changeViewError, setChangeViewError] = useState(false)
  const [touchedFields, setTouchedFields] = useState({});
  const [anuncioEncontrado, setAnuncioEncontrado] = useState([])

  console.log(currentUser?.id);

  const [selectedOptionsS, setSelectedOptionsS] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [dataFile, setDataFile] = useState({
    linksVideos: []
  })

  const diasOptions = [
    "LU",
    "MA",
    "MI",
    "JU",
    "VI",
    "SA",
    "DO"
  ];

  useEffect(() => {
    const parseCurrentUser = localStorage.getItem('storedUser')
    const user = JSON.parse(parseCurrentUser)
    
    if(!currentUser){
      setCurrentUser(user)
    }
  }, [])

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [terminoscondiciones, setTerminoscondiciones] = useState(true)
  const [filePrincipal, setFilePrincipal] = useState()
  const [galeriaImages, setGaleriaImages] = useState()
  const [horaInicio, setHoraInicio] = useState("8:00")
  const [horaIAmPm, setHoraIAmPm] = useState("AM")
  const [horaFinal, setHoraFinal] = useState("12:00")
  const [horaFAmPm, setHoraFAmPm] = useState("AM")
  const [selectedImagesLinks, setSelectedImagesLinks] = useState([])
  const [formContent, setFormContent] = useState({
    
    userId: "",
    tarifaxhr: null,
    tarifaxmr: null,
    name: "",
    description: "",
    whatsapp: "",
    region: "",
    lugar: "",
    nacionalidad: "",
    diasAtencion: "",
    horarioInicio: "",
    horarioFin: "",
    edad: null,
    idioma: [],
    altura: "",
    peso: "",
    questionEnd: '',
    atencion: [],
    galeriaVideos: []
  });

  useEffect(() => {
    const hrF = horaFinal + " " + horaFAmPm
    const hrI = horaInicio + " " + horaIAmPm

    setFormContent((prev) => ({
      ...prev,
      horarioInicio: hrI
    }))

    setFormContent((prev) => ({
      ...prev,
      horarioFin: hrF
    }))

  }, [horaFinal, horaFAmPm, horaInicio, horaIAmPm])

  // useEffect(() => {
  //   const data = localStorage.getItem("anuncioStorage")
  //   const Anuncios = JSON.parse(data)
  //   const anuncioFound = Anuncios?.find((a) => a?.id === id)
  //   setAnuncioEncontrado(anuncioFound)
  // }, [])

  useEffect(() => {
    axios.get(`/api/anuncio/${params?.id}`)
    .then(res => setAnuncioEncontrado(res.data))
    .catch(err => console.log(err))
    }, [])

    console.log(anuncioEncontrado);
  
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
            galeriaFotos: anuncioEncontrado.galeriaFotos,
            imagenPrincipal: anuncioEncontrado.imagenPrincipal,
            galeriaVideos: anuncioEncontrado.galeriaVideos
          });
  
          setSelectedImage(anuncioEncontrado.imagenPrincipal)
          setSelectedImagesLinks(anuncioEncontrado.galeriaFotos)
          // setSelectedImages(anuncioEncontrado.galeriaFotos)
          // setPreviewImages(anuncioEncontrado.galeriaFotos)
          setFilePrincipal(anuncioEncontrado.imagenPrincipal)
          setGaleriaImages(anuncioEncontrado.galeriaFotos)
        }
      }, [anuncioEncontrado]);
  
      const handleImagesEdit = (value) => {

        console.log(value);

        setSelectedImagesLinks(selectedImagesLinks.filter((link) => link !== value));

      }

  const handleTerminosCondiciones = (e) => {
    setTerminoscondiciones(!terminoscondiciones); // Cambiar el estado entre true y false
  };

  const [error, setError] = useState({})
  const id = currentUser?.id
  
  console.log(id);

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

    // Marcar el campo como tocado
  setTouchedFields({
    ...touchedFields,
    [name]: true,
  });

    // Valida el campo y configura el error correspondiente
  const fieldErrors = validation({ ...formContent, [name]: value });

  setError((prev) => ({
    ...prev,
    [name]: fieldErrors[name], // Configura el error para el campo específico
  }));
    
   
  };

  const handleHoraInicio = (e) => {
    
    setHoraInicio("")
    
    const { value } = e.target

      setHoraInicio(value)
  }

  const handleIAmPm = (e) => {

    setHoraIAmPm("")

    const { value } = e.target
    
    setHoraIAmPm(value)
        
  }

  const handleHoraFinal = (e) => {
    
    setHoraFinal("")
    
    const { value } = e.target

      setHoraFinal(value)
  }

  const handleFAmPm = (e) => {

    setHoraFAmPm("")

    const { value } = e.target
    
    setHoraFAmPm(value)
        
  }
  
  const handleAtencion = (e) => {
    const { value } = e.target;

    setFormContent((prevFormData) => ({
      ...prevFormData,
      atencion: prevFormData?.atencion?.includes(value)
        ? prevFormData?.atencion?.filter((i) => i !== value)
        : [...prevFormData.atencion, value],
    }));

     // Marcar el campo como tocado
  setTouchedFields({
    ...touchedFields,
    atencion: true,
  });

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

     // Marcar el campo como tocado
  setTouchedFields({
    ...touchedFields,
    nacionalidad: true,
  });
    
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

     // Marcar el campo como tocado
  setTouchedFields({
    ...touchedFields,
    region: true,
  });

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

     // Marcar el campo como tocado
  setTouchedFields({
    ...touchedFields,
    provincia: true,
  });

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

 // Marcar el campo como tocado
 setTouchedFields({
  ...touchedFields,
  diasAtencion: true,
});

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

     // Marcar el campo como tocado
  setTouchedFields({
    ...touchedFields,
    idioma: true,
  });

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
      setSelectedImage()
      setFormContent((prev) => ({
        ...prev,
        imagenPrincipal: ""
      }))
      setFilePrincipal()
      // Valida la extensión del archivo
      const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
      const extension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(extension)) {
        alert("El archivo debe ser una imagen en formato JPG, JPEG, PNG o GIF.");
        e.target.value = null; // Limpia la entrada de archivo
        return;
      }

      // Valida el tamaño del archivo (en bytes)
      const maxSizeKB = 1500; // 1500KB
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
    const files = e.target.files;

    console.log(files);

    const updatedSelectedImages = [...selectedImages];
    const updatedPreviewImages = [...previewImages];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Valida el tamaño del archivo (en bytes)
      const maxSizeKB = 1500; // 1500KB
      if (file.size > maxSizeKB * 1024) {
        alert(`La imagen ${file.name} excede el tamaño máximo de 1.5MB.`);
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

    setGaleriaImages(selectedImages)
  };

  const removeImage = (index) => {
    const updatedSelectedImages = [...selectedImages];
    const updatedPreviewImages = [...previewImages];

    updatedSelectedImages.splice(index, 1);
    updatedPreviewImages.splice(index, 1);

    setSelectedImages(updatedSelectedImages);
    setPreviewImages(updatedPreviewImages);
  };


  const actionCreateGaleriaImages = async () => {

    try {

      if(selectedImages){
        
      const formData = new FormData();
      for (const image of selectedImages) {
        formData.append('file', image);
      }
  
      const resGaleria = await fetch('/api/anuncio/galeria', {
        method: "POST",
        body: formData,
      });
  
      const dataG = await resGaleria.json();
      const imagesUrl = dataG.imagesUrl;

      if(selectedImagesLinks?.length > 0){
        if(imagesUrl?.length > 0){
        return [...selectedImagesLinks , ...dataG.imagesUrl];
        }
        return selectedImagesLinks; 
      } else if(imagesUrl?.length > 0){
          return imagesUrl
      }
      }else{

        return selectedImagesLinks; 
      }
      
    } catch (error) {
      console.log(error);
    }
  }

/* Funcion para limpiar contenido */

  const clean = () => {
    setFormContent({
      userId: "",
      tarifaxhr: "",
      tarifaxmr: "",
      name: "",
      description: "",
      whatsapp: "",
      region: "",
      lugar: "",
      nacionalidad: "",
      diasAtencion: "",
      horarioInicio: "",
      horarioFin: "",
      edad: "",
      idioma: [],
      altura: "",
      peso: "",
      atencion: "",
      questionEnd: "",
      imagenPrincipal: "",
      galeriaFotos: [],
      galeriaVideos: [],
    })

    setSelectedImage("")
    setSelectedImages([])
    setSelectedImagesLinks([])
    setGaleriaImages([])

  }

  useEffect(() => {
    setError(validation(formContent));
  }, [formContent]);

  /*Ejecucion para crear anuncio */

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log(selectedImages);
      console.log(selectedImagesLinks);
      console.log(formContent.galeriaVideos);

      if(terminoscondiciones){
        console.log('estoy aqui');
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
          console.log('estoy aqui');
          // que haya una rueda girando con un mensaje que indique que estan cargando los archivos de su anuncio
          clean()
           //Galeria de imagenes y videos
           setLoading(true); // Iniciar carga
          
           // Esperar a que ambas funciones de carga se completen
           const [galeriaImagesUrl] = await Promise.all([
            actionCreateGaleriaImages(),
          ]);
          
          console.log(galeriaImagesUrl);

        // Imagen principal
        
        if(filePrincipal?.length > 10){
          // Imagen principal
          console.log('estoy aqui');
        // Actualizar formContent con las URLs de las galerías
        const updatedFormContent = {
          ...formContent,
          imagenPrincipal: filePrincipal,
          galeriaFotos: galeriaImagesUrl,
        };
    
        console.log(updatedFormContent);

        await createAnuncio(updatedFormContent, id)
    
          // Finalizar carga
          setLoading(false);
          setShowModal(true)
          // setLoading(false); // Finalizar carga
          return
          }

        const formData = new FormData()
        formData.append('file', filePrincipal)
    
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
          galeriaFotos: galeriaImagesUrl,
        };
    
        await createAnuncio(updatedFormContent, id)

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

  const toggleOptionS = (optionS) => {
    // Copia el array de opciones seleccionadas
    const newSelectedOptionsS = [...selectedOptionsS];

    // Verifica si la opción ya está seleccionada y la quita
    if (newSelectedOptionsS.includes(optionS)) {
      const index = newSelectedOptionsS.indexOf(optionS);
      if (index !== -1) {
        newSelectedOptionsS.splice(index, 1);
      }
    } else {
      // Agrega la opción seleccionada
      newSelectedOptionsS.push(optionS);
    }
    setSelectedOptionsS(newSelectedOptionsS);
    const diasAtencionString = ordenarDiasYGenerarString(newSelectedOptionsS);

    console.log(diasAtencionString);

    // Actualiza el estado de opciones seleccionadas
    setFormContent((prevFormContent) => ({
      ...prevFormContent,
      diasAtencion: diasAtencionString,
    }));

    // Marcar el campo como tocado
  setTouchedFields({
    ...touchedFields,
    diasAtencion: true,
  });

  const fieldErrors = validation({ ...formContent, diasAtencion: diasAtencionString });
  setError((prev) => ({
    ...prev,
    diasAtencion: fieldErrors.diasAtencion, // Configura el error para el campo de idioma
  }));
  };

  const isOptionSelectedS =  (optionS) => {
    if(selectedOptionsS?.includes(optionS)){
      return true
    }
    return false
  }

  const AmPm = ["AM", "PM"]
  console.log(formContent);

  return (
    
    <containert className="relative flex bg-dark-d dark:bg-white">
      {showModal && (
          <div className="z-100 fixed bg-[#000000e6] flex h-full w-screen overflow-x-hidden items-center justify-center text-white">
       
            <section className="relative bg-[#144912] border-4 border-[#63ff41] p-10 flex flex-col items-center justify-center gap-1 mx-4">
            <Link href={`/dashboard-de-usuario/${id}`} className="absolute text-red-500 font-bold top-0 right-0 text-xl p-1 bg-black hover:scale-105">
              <RiCloseFill />
            </Link>
            <ok className='flex flex-col items-center justify-center gap-1 mt-2'>
            <img width="28" height="28" src="/assets/check.gif" alt="high-priority"/>
              <nav className="text-center text-3xl lg:text-4xl font-extrabold">Actualización exitosa</nav>
              
            </ok>
            {/* <inactive className='flex flex-col items-center justify-center gap-1'>
              <nav className="text-center font-extralight text-sm">Pero tu anuncio se encuentra inactivo</nav>
              <img width="18" height="18" src="https://img.icons8.com/color/48/high-priority.png" alt="high-priority"/>
            </inactive> */}
            <buttons className='flex gap-2 mt-4'>
              <Link href={`/dashboard-de-usuario/${id}`} className="p-4 bg-red-500 hover:bg-red-600 rounded text-center font-extrabold">Ver anuncio</Link>
              {/* <Link href={'/activar-anuncio'} className="p-4 bg-violet-600 hover:bg-violet-700 rounded text-center font-extrabold">Activar anuncio</Link> */}
            </buttons>
            </section>            
          </div>
          )}
      {loading && (
          <div className="z-100 fixed bg-[#000000e6] flex h-full w-screen items-center justify-center text-white font-extrabold">
       
            <nav className=" absolute text-center text-2xl lg:text-3xl">Modificando anuncio</nav>
            <div class="flex flex-row gap-2 mt-[100px] lg:mt-[120px]">
              <div class="w-10 h-10 rounded-full bg-back-red animate-bounce [animation-delay:.7s]"></div>
              <div class="w-10 h-10 rounded-full bg-back-red animate-bounce [animation-delay:.3s]"></div>
              <div class="w-10 h-10 rounded-full bg-back-red animate-bounce [animation-delay:.7s]"></div>
            </div>
          </div>
          )}
      <contain className=" w-screen min-h-screen overflow-x-hidden flex flex-col items-center">
      
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true} />
        <titulo className="text-white dark:text-black mt-[100px] font-bold text-3xl border-b-4 border-bor-red">
          <strong className="text-t-red">EDITAR</strong> ANUNCIO
        </titulo>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="m-5 flex flex-col bg-dark-l dark:bg-[#fffef4] sm:max-w-[80%] lg:max-w-[50%] shadow-custom1 rounded-[10px] px-5 items-center gap-2"
        >
          <containerform className=" grid sm:grid-cols-2 lg:grid-cols-2 gap-4 my-10">
            <div className="flex flex-col gap-1 w-[300px] sm:w-full mx-auto">
              <label htmlFor="name" className="text-white dark:text-black">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formContent.name}
                onChange={handleChange}
                placeholder=""
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] border-2 text-white dark:text-black dark:bg-white bg-dark-d  dark:focus:text-black border-bor-red rounded-[10px] outline-none"
                
              />
              { changeViewError && error && error?.name ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.name}</p> : touchedFields.name && error && error?.name ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.name}</p> : ""}
            </div>

            <div className="flex flex-col gap-1 w-[300px] sm:w-full mx-auto">
              <label htmlFor="name" className="text-white dark:text-black">Tarifa por hora (en soles):</label>
              <input
                type="text"
                id="tarifaxhr"
                name="tarifaxhr"
                value={formContent.tarifaxhr}
                onChange={handleChange}
                placeholder=""
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] border-2 text-white dark:text-black dark:bg-white bg-dark-d  dark:focus:text-black border-bor-red rounded-[10px] outline-none"
                
              />
              { changeViewError && error && error?.tarifaxhr ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.tarifaxhr}</p> : touchedFields.tarifaxhr && error && error?.tarifaxhr ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.tarifaxhr}</p> : ""}
            </div>

            <div className="flex flex-col gap-1 w-[300px] sm:w-full mx-auto">
              <label htmlFor="name" className="text-white dark:text-black">Tarifa por media hora (en soles):</label>
              <input
                type="text"
                id="tarifaxmr"
                name="tarifaxmr"
                value={formContent.tarifaxmr}
                onChange={handleChange}
                placeholder=""
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] border-2 text-white dark:text-black dark:bg-white bg-dark-d  dark:focus:text-black border-bor-red rounded-[10px] outline-none"
                
              />
                { changeViewError && error && error?.tarifaxmr ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.tarifaxmr}</p> : touchedFields.tarifaxmr && error && error?.tarifaxmr ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.tarifaxmr}</p> : ""}
            </div>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto">
              <label htmlFor="name" className="text-white dark:text-black">Número de WhatsApp:</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formContent.whatsapp}
                onChange={handleChange}
                placeholder=""
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] border-2 text-white dark:text-black dark:bg-white bg-dark-d  dark:focus:text-black border-bor-red rounded-[10px] outline-none"
                
              />
               { changeViewError && error && error?.whatsapp ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.whatsapp}</p> : touchedFields.whatsapp && error && error?.whatsapp ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.whatsapp}</p> : ""}
            </div>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto">
              <label htmlFor="name" className="text-white dark:text-black">Descripción:</label>
              <textarea
                type="text"
                id="description"
                name="description"
                cols="10"
                rows="7"
                value={formContent.description}
                onChange={handleChange}
                style={{ resize: 'none' }}
                placeholder="​"
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 p-[10px] border-2 text-white dark:text-black dark:bg-white bg-dark-d  dark:focus:text-black border-bor-red rounded-[10px] outline-none"
                
              />
               { changeViewError && error && error?.description ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.description}</p> : touchedFields.description && error && error?.description ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.description}</p> : ""}
            </div>

            <atencion className="flex flex-col gap-[12px] w-[300px] sm:w-full mx-auto">
              <h1 className="text-white dark:text-black" >Horario de atención</h1>
              <containerhorarioatencion className="dark:bg-[#ffc876] bg-[#2c2c2c] p-4 rounded-[10px] grid gap-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-white dark:text-black">Selecciona tus días de atención:</label>
                  <diasatencion className="grid grid-cols-4 xl:grid-cols-7 xl:w-[260px] 2xl:w-full gap-1 w-[270px] sm:w-full overflow-hidden">
        {diasOptions.map((optionS) => (
          <button
            key={optionS}
            type="button"
            className={` ${
              isOptionSelectedS(optionS) ? "dark:bg-[#ff5f2f] dark:text-white text-black font-extrabold bg-[#7c2929]" : "dark:bg-white bg-dark-l"
            } text-sm p-[4px] border-2 dark:border-white dark:text-black border-bor-red text-t-red rounded-[10px] dark:hover:bg-[#ff6a50] hover:text-white hover:bg-[#7c2929] transition-all ease-linear duration-300`}
            onClick={() => toggleOptionS(optionS)}
          >
            {optionS}
          </button>
        ))}
      </diasatencion>
                  { changeViewError && error && error?.diasAtencion ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.diasAtencion}</p> : touchedFields.diasAtencion && error && error?.diasAtencion ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.diasAtencion}</p> : ""}
                </div>

                <div className="flex flex-col 2xl:flex-row gap-2 w-[300px] sm:w-full mx-auto">
                  <div className="flex flex-row sm:flex-col gap-2">
                    <label htmlFor="horarioInicio" className="text-white dark:text-black">Hora de inicio:</label>
                    <hora className='flex flex-row gap-[1px]'>
                    <select name="" id="" onChange={handleHoraInicio} className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[2px] border-2 border-bor-red">
                      <option value="">Selecciona:</option>
                      <option name="1:00" value="1:00">1:00</option>
                      <option name="1:00" value="2:00">2:00</option>
                      <option name="1:00" value="3:00">3:00</option>
                      <option name="1:00" value="4:00">4:00</option>
                      <option name="1:00" value="5:00">5:00</option>
                      <option value="6:00">6:00</option>
                      <option value="7:00">7:00</option>
                      <option value="8:00">8:00</option>
                      <option value="9:00">9:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                    </select>
                    <select onChange={handleIAmPm} className="text-sm focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white focus:dark:text-black rounded-[10px] p-[2px] border-2 border-bor-red">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                      {/* <button className="flex flex-col gap-1 focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black rounded-[10px] p-[2px] border-2 border-bor-red text-sm">AM</button>
                      <button className="flex flex-col gap-1 focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black rounded-[10px] p-[2px] border-2 border-bor-red text-sm">PM</button> */}
                    </select>
                    </hora>
                  </div>
                  <div className="flex flex-row sm:flex-col gap-2">
                    <label htmlFor="horarioFin" className="text-white dark:text-black">Hora de cierre:</label>
                    <hora className='flex flex-row gap-[1px]'>
                    <select name="" id="" onChange={handleHoraFinal} className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[2px] border-2 border-bor-red">
                      <option value="">Selecciona:</option>
                      <option value="1:00">1:00</option>
                      <option value="2:00">2:00</option>
                      <option value="3:00">3:00</option>
                      <option value="4:00">4:00</option>
                      <option value="5:00">5:00</option>
                      <option value="6:00">6:00</option>
                      <option value="7:00">7:00</option>
                      <option value="8:00">8:00</option>
                      <option value="9:00">9:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                    </select>
                    <select onChange={handleFAmPm} className="text-sm focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[2px] border-2 border-bor-red">
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                      {/* <button className="flex flex-col gap-1 focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black rounded-[10px] p-[2px] border-2 border-bor-red text-sm">AM</button>
                      <button className="flex flex-col gap-1 focus:ring focus:ring-yellow-400 focus:bg-yellow-50 dark:focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none dark:text-white text-black bg-white dark:bg-dark-d focus:dark:text-white focus:text-black rounded-[10px] p-[2px] border-2 border-bor-red text-sm">PM</button> */}
                    </select>
                    </hora>
                  </div>
                </div>
              </containerhorarioatencion>
            </atencion>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
              <label htmlFor="name" className="text-white dark:text-black">Preferencias de atención</label>
              <div className="dark:bg-[#ffc876] bg-[#2c2c2c] p-4 rounded-[10px] flex gap-2 text-sm items-center justify-center text-white dark:text-black">
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
              { changeViewError && error && error?.atencion ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.atencion}</p> : touchedFields.atencion && error && error?.atencion ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.atencion}</p> : ""}
            </div>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
              <label htmlFor="name" className="text-white dark:text-black">Nacionalidad de la chica:</label>
              <select
                name="nacionalidad"
                id="nacionalidad"
                value={formContent.nacionalidad}
                onChange={handleNacionalidad}
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[10px] border-2 border-bor-red"
              >
                <option value="">Selecciona una nacionalidad</option>
                {nacionalidades.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              { changeViewError && error && error?.nacionalidad ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.nacionalidad}</p> : touchedFields.nacionalidad && error && error?.nacionalidad ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.nacionalidad}</p> : ""}
            </div>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
              <label htmlFor="name" className="text-white dark:text-black">Departamento de atención:</label>
              <select
                name="region"
                id="region"
                value={formContent.region}
                onChange={handleDepartamento}
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[10px] border-2 border-bor-red"
              >
                <option value="">Selecciona un departamento</option>
                {regiones.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              { changeViewError && error && error?.region ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.region}</p> : touchedFields.region && error && error?.region ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.region}</p> : ""}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-white dark:text-black">Provincia de atención:</label>
              <select
                name="lugar"
                id="lugar"
                value={formContent.lugar}
                onChange={handleProvincia}
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[10px] border-2 border-bor-red"
              >
                <option value="">Selecciona una provincia</option>
                {distritosEncontrados &&
                  distritosEncontrados.places.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
              </select>
              { changeViewError && error && error?.lugar ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.lugar}</p> : touchedFields.lugar && error && error?.lugar ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.lugar}</p> : ""}
            </div>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
              <label htmlFor="name" className="text-white dark:text-black">Edad en años:</label>
              <input
                type="text"
                id="edad"
                name="edad"
                value={formContent.edad}
                onChange={handleChange}
                placeholder=""
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[10px] border-2 border-bor-red"
                
              />
                { changeViewError && error && error?.edad ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.edad}</p> : touchedFields.edad && error && error?.edad ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.edad}</p> : ""}
            </div>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
              <label htmlFor="name" className="text-white dark:text-black">Selecciona los idiomas que domine:</label>
              <div className="dark:bg-[#ffc876] bg-[#2c2c2c] p-4 rounded-[10px] flex gap-2 text-sm items-center justify-center text-white dark:text-black">
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
              { changeViewError && error && error?.idioma ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.idioma}</p> : touchedFields.idioma && error && error?.idioma ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.idioma}</p> : ""}
            </div>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
              <label htmlFor="name" className="text-white dark:text-black ">Peso en kg:</label>
              <input
                type="text"
                id="peso"
                name="peso"
                value={formContent.peso}
                onChange={handleChange}
                placeholder=""
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[10px] border-2 border-bor-red"
               
              />
               { changeViewError && error && error?.peso ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.peso}</p> : touchedFields.peso && error && error?.peso ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.peso}</p> : ""}
            </div>

            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
              <label htmlFor="name" className="text-white dark:text-black">Altura:</label>
              <input
                type="text"
                id="altura"
                name="altura"
                value={formContent.altura}
                onChange={handleChange}
                placeholder=""
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[10px] border-2 border-bor-red"
              
              />
               { changeViewError && error && error?.altura ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.altura}</p> : touchedFields.altura && error && error?.altura ? <p className="text-white text-center font-mono text-[12px] p-1 bg-red-500 w-auto ">{error?.altura}</p> : ""}
            </div>
                  {/* Imagen principal */}
            <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
      <label htmlFor="name" className="text-white dark:text-black flex gap-4">Imagen principal<nav className="text-white dark:text-black text-sm mt-[3px]">(Ancho: 1350px, Alto: 1000px)</nav></label>
      <input
        type="file"
        onChange={handleImageChange}
        accept="image/jpeg, image/png, image/gif"
        className="p-[10px] border-2 text-white dark:text-black border-bor-red rounded-[10px] outline-none"
      />
      {selectedImage && (
        <div>
          <h2 className="text-white dark:text-black">Imagen seleccionada:</h2>
          <img src={selectedImage} alt="Vista previa de la imagen" />
        </div>
      )
    }
      {/* { error && error.imagenPrincipal ? <p className="text-white text-center font-mono text-[12px] p-1 bg-back-redd w-auto ">{error.imagenPrincipal}</p> : ""} */}
    </div>

                  {/* Galería de imagenes */}
    <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
      <label htmlFor="name" className="text-white dark:text-black">Galería de fotos: </label>
      <input
        type="file"
        onChange={handleImagesChange}
        multiple
        accept="image/jpeg, image/png, image/gif"
        className="p-[10px] border-2 text-white dark:text-black border-bor-red rounded-[10px] outline-none focus:ring focus:ring-blue-300"
      />
      <div className="flex flex-col gap-1">
      {setSelectedImagesLinks?.length > 0 && (


          <div className="grid grid-cols-4 overflow-hidden gap-1">
            {selectedImagesLinks?.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Foto ${index + 1}`} />
                <button
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                  onClick={() => handleImagesEdit(image)}
                  type="button"
                >
                  X
                </button>
              </div>
            ))}
          </div>
          
 
      )}
      { selectedImages?.length > 0 && (
      
          <div className="grid grid-cols-4 overflow-hidden gap-1">
            {selectedImages?.map((image, index) => (
              <div key={index} className="relative">
                <img src={previewImages[index]} alt={`Foto ${index + 1}`} />
                <button
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                  onClick={() => removeImage(index)}
                  type="button"
                >
                  X
                </button>
              </div>
            ))}
          
          </div>)
          }
      </div>
    </div>

        <div className="flex flex-col gap-2 w-[300px] sm:w-full mx-auto ">
              <label htmlFor="name" className="text-white dark:text-black">Galería de videos: </label>
              <CldUploadButton cloudName="doxatacbw" uploadPreset="zw1ztiu3" 
              text={{
                en: {
                  myFiles: "Mis archivos",
                  webAddress: "Dirección web",
                  camera: "Cámara",
                  googleDrive: "Google Drive",
                  dropbox: "Dropbox",
                  shutterstock: "Shutterstock",
                  gettyimages: "Getty Images",
                  istock: "iStock",
                  unsplash: "Unsplash",
                  dragAndDrop: "Arrastra y suelta tus archivos aquí",
                  or: "O",
                  noFilesSelected: "Sin archivos seleccionados",
                  browse: "Seleccionar archivos",
                },
                es: {
                  myFiles: "Mis archivos",
                  webAddress: "Dirección web",
                  camera: "Cámara",
                  googleDrive: "Google Drive",
                  dropbox: "Dropbox",
                  shutterstock: "Shutterstock",
                  gettyimages: "Getty Images",
                  istock: "iStock",
                  unsplash: "Unsplash",
                  dragAndDrop: "Arrastra y suelta tus archivos aquí",
                  or: "O",
                  noFilesSelected: "Sin archivos seleccionados",
                  browse: "Seleccionar archivos",
                },
              }}
              className="flex gap-2 items-center justify-center p-2 bg-[#ffc876] border-2 rounded-[10px] border-bor-red text-black font-bold hover:bg-back-red transition-all ease-linear duration-300"
              onUpload={(result) => {
                // Extrae la URL segura de este objeto y guárdala en el array
                if (result.info && result.info.secure_url) {
                  const newLink = result.info.secure_url;
                  setFormContent((prevFormContent) => ({
                    ...prevFormContent,
                    galeriaVideos: [...prevFormContent.galeriaVideos, newLink],
                  }));
                }
                // Otras operaciones si es necesario
                console.log(formContent.galeriaVideos);
              }}

              
              
              >
                <nav>Subir videos</nav>
                <FaUpload className='w-4 h-4 text-black'/>
              </ CldUploadButton>
              <div className="flex flex-wrap gap-2">
              { formContent && formContent?.galeriaVideos && formContent?.galeriaVideos?.map((g, index) => (

                <div key={index} className="relative">
                  <video
                    key={index}
                    src={g}
                    controls
                    className="max-w-full h-[120px]"
                  />
                  <button
                  className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-full"
                  onClick={() => {
                    setFormContent((prevFormContent) => ({
                      ...prevFormContent,
                      galeriaVideos: prevFormContent.galeriaVideos.filter((video) => video !== g),
                    }));
                  }}
                  type="button"
                >
                  X
                </button>
                </div>
                ))}
              </div>
            </div>

          </containerform>
          
          <preguntaobligatoria className='mb-5 flex flex-col sm:flex-row gap-4 items-center justify-center'>
                <div className="flex flex-col gap-2 items-center justify-center text-white dark:text-black">
                <h1 className="text-normal sm:text-xl font-bold">¿Cómo te enteraste de nosotros?</h1>
                <h6 className="text-[12px] sm:text-sm">(Pregunta obligatoria para continuar)</h6>
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
                placeholder="​"
                className="focus:ring focus:ring-yellow-400 dark:focus:bg-yellow-50 focus:bg-slate-800 focus:transition-all focus:ease-in-out transition-all ease-in-out duration-300 focus:duration-300 outline-none text-white dark:text-black dark:bg-white bg-dark-d focus:text-white dark:focus:text-black rounded-[10px] p-[10px] border-2 border-bor-red"
                
              />
          </preguntaobligatoria>

          <terminoscondiciones className="w-[300px] sm:w-full mx-auto flex flex-col items-center justify-center gap-2 mb-5 font-bold text-white dark:text-black ">
                 <div className="flex items-center justify-center gap-2 text-normal">
                 <input type="radio"
                      value={terminoscondiciones} checked={terminoscondiciones} onChange={handleTerminosCondiciones}/>
                  <h1 className="text-center">He leído y acepto los términos y condiciones</h1>
                 </div>
                  <Link target="_blank" href={'https://drive.google.com/file/d/1H1T-qnLR4bL4JWBkqTff3pnf8qfCqUA_/view?usp=drive_link'} className={`text-sm text-red-500 hover:text-red-700 transition-all duration-300 ease-in-out`}>Leer términos y condiciones</Link>
          </terminoscondiciones>
          
          {/* Agrega más campos del anuncio aquí */}
          <containbuttons className="grid grid-cols-2 gap-4">
            <button type="button" onClick={handleClean} className="bg-transparent border-2 border-bor-red shadow-p4 duration-300 ease-linear transition-all p-4 rounded-[10px] text-t-red hover:bg-[#fff] font-bold mb-10">
              Limpiar
            </button>
            <button
              type="submit"
              className="bg-back-red shadow-p4 red p-4 rounded-[10px] text-white hover:bg-[#ff8c57] duration-200 ease-linear transition-all font-bold mb-10"
            >
              Crear Anuncio
            </button>
          </containbuttons>
        </form>


      </contain>
    </containert>
  );
};

export default EditarAnuncio;
