"use client"

import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import SMSFlotante from "./SMSFlotante";
import useCurrentUser from "@/hooks/customhooks/useCurrentUser";
// import axios from "axios";

const Access = ({ children }) => {

  const pathname = usePathname();
  const mensaje ="&text=Hola%2C%20estoy%20interesad@%20en%20unirme%20a%20un%20equipo%20de%20desarrollo.";
  // const { user, currentUser} = useCurrentUser()
  const user = useUser()
  const [ userData, setUserData ] = useState(null)
  const [updatedAnuncio, setUpdatedAnuncio] = useState(false);

  const userCreate = {
    clerkId: user?.user?.id || '', // Usar un valor predeterminado si 'user' o 'user.user' es nulo
    firstname: user?.user?.firstName || '',
    // lastname: user?.user?.lastName || '',
    fullname: user?.user?.fullName || '',
    email: user?.user?.emailAddresses[0]?.emailAddress || '',
    image: user?.user?.imageUrl || '',
  };

  // const userCreate = {
  //   clerkId: "user_2T2sOu",
  //   firstname: "Cris",
  //   lastname: "Rojas",
  //   fullname: "Cris Rojas",
  //   email: "cris.rojas2345@gmail.com",
  //   image: "https://img.clerk.com"
  // };
  
  console.log(userCreate.image);

    // useEffect(() => {
      
    //     fetch("/api/user", {
    //       method: "POST",
    //       body: JSON.stringify(userCreate),
    //       headers: { "Content-type": "application/json; charset=UTF-8" },
    //     })
    //     .then(data => data.json())
    //     .then(res => console.log(res))
    //     .catch(error => console.log("Hubo un error: ", error.message))

      

    // }, [user])

    useEffect(() => {
      const storedUser = localStorage.getItem("storedUser");
      if(user && !userData && !storedUser){
        console.log("entre aqui");
        // El usuario no está almacenado localmente, así que guárdalo en la base de datos
        fetch("/api/user", {
          method: "POST",
          body: JSON.stringify(userCreate),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        })
          .then((data) => data.json())
          .then((res) => {
            console.log(res);
            // Almacena el usuario en el almacenamiento local
            setUserData(res.user)
            localStorage.setItem("storedUser", JSON.stringify(res.user));
          })
          .catch((error) => console.log("Hubo un error: ", error.message));
      }
       const parsedUser = JSON.parse(storedUser) 

       if(!userData){
        setUserData(parsedUser)
       }
      console.log("estoy aqui");
    }, [user, userData]);

    console.log(userData);
    
    

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
          localStorage.setItem("anuncioStorage", JSON.stringify(data));
          localStorage.removeItem("updatedAnuncio");
        });
    }
  }, [updatedAnuncio]);

  return (
    <>
      {
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/dashboard" ||
      pathname === "/dashboard/users" ||
      pathname === "/demoform" ||
      pathname === '/dashboard/crear-equipo' ||
      pathname === '/dashboard/equipos'
        ? ""
        : <Navbar currentUserR={userData}/>}
      {children}

      {pathname === "/sign-in" ||
      pathname === "/sign-up" ||
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/dashboard" ||
      pathname === "/dashboard/users" ||
      pathname === "/guia" ||
      pathname === `/guia/react` ||
      pathname === `/guia/svelte` ||
      pathname === `/guia/angular` ||
      pathname === `/guia/vue`||
      pathname === `/proyectos`||
      pathname === "/demoform" ||
      pathname === "/dashboard-de-usuario" ||
      pathname === "/formulario-de-inscripcion"||
      pathname === '/dashboard/crear-equipo' ||
      pathname === '/dashboard/equipos' ||
      pathname === "/reportar"
        ? ""
        : <Footer />}

       {
      pathname === "/register" ||
      pathname === "/dashboard" ||
      pathname === "/dashboard/users" ||
      pathname === '/dashboard/crear-equipo' ||
      pathname === '/dashboard/equipos'
      ? "" : ""
       }
    </>
  );
};

export default Access;

{/* <SMSFlotante /> */}