"use client"

import AdminDashboard from "@/components/AdminDashboard/AdminDashboard"
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import useCurrentUser from "@/hooks/customhooks/useCurrentUser";
import { useRouter } from "next/navigation";

const DashBoardPage = () => {
        
  const [arrUsers, setArrUsers] = useState()
  const router = useRouter()
  const {user, currentUser} = useCurrentUser()

  console.log(currentUser)
if(currentUser?.role === "ADMIN" || currentUser?.role === "SUPER_ADMIN"){
        
  return (
        <>
  
                {/* {currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN' ? <AdminDashboard arrUsers={arrUsers}/> : router.push('sign-in')} */}
                <AdminDashboard arrUsers={arrUsers} currentUserOk={currentUser}/>
        </>
        )
}else{
        
  return (
        <>
  
                {/* {currentUser?.role === 'ADMIN' || currentUser?.role === 'SUPER_ADMIN' ? <AdminDashboard arrUsers={arrUsers}/> : router.push('sign-in')} */}
                <h1 className="mt-40 text-slate-500 font-bold text-3xl text-center">ACCESO DENEGADO: No tienes permiso de administrador.</h1>
                <h1 className="mt-1 text-slate-500 font-bold text-2xl text-center">Espera 5s, puede que sus datos de administrador se esten cargando...</h1>
        </>
        )
}
}

export default DashBoardPage