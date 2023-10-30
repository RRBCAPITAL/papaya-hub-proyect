"use client"

import { existingNumbers } from "@/Data/data";

// Función para generar un número aleatorio único
export function generateIDFrontend() {
  let randomNumber;

  const data = localStorage.getItem("anuncioStorage")
  const anuncios = JSON.parse(data)

  console.log(anuncios);

  do {
    // Genera un número aleatorio de 1000 a 9999 (puedes ajustar el rango según tus necesidades)
    randomNumber = Math.floor(100 + Math.random() * 999);
  } while (anuncios?.some(i => {
    if (i?.idFrontend) {
      console.log(i.idFrontend.substring(1, 3));
      i.idFrontend.substring(1, 4) === randomNumber.toString() && true // Debes convertir randomNumber a una cadena
    }
    return false; 
  })); // Verifica si el número ya existe

  console.log(randomNumber);
  // Obtén el mes actual en forma de letra mayúscula
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const currentMonth = months[new Date().getMonth()];
  const idFrontend = `${currentMonth.charAt(0)}${randomNumber}`;

  console.log(idFrontend);
  return idFrontend;
}
