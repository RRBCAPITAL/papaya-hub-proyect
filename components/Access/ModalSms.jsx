"use client"

import { useState } from "react";

const ModalSms = ({ setModalSmsOpen, closeModal }) => {

    const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar los datos del formulario a Formspree
    const response = await fetch("https://formspree.io/your_form_id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      // El formulario se envió con éxito, puedes mostrar un mensaje de confirmación
      console.log("Formulario enviado con éxito");
    } else {
      // Hubo un error al enviar el formulario
      console.error("Error al enviar el formulario");
    }
  };
  
  return (
    <div className={`fixed bottom-0 right-0 transform transition-all duration-300 opacity-0  ${setModalSmsOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} absolute z-50 bottom-0 right-0 w-fit h-fit text-white bg-[#632fff] shadow-normal transition-all ease-in-out duration-300 rounded-[20px] cursor-pointer`}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center px-6 py-8">
      
      <campoemail>
      <label htmlFor="email">Tu correo:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="outline-none mt-1 p-2 text-black focus:text-black rounded"
        required
      />
      </campoemail>

      <camposms>
      <label htmlFor="message" className="">Tu mensaje:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="outline-none mt-1 p-2 text-black focus:text-black w-full rounded"
        required

        style={{resize: "none"}}
      />
      </camposms>

      <button type="submit" className="p-2 bg-[#22193e] w-full rounded">Enviar</button>
      <button type="button" className="z-50 absolute top-1 right-1 bg-black rounded-full px-2 py-1 text-white" onClick={() => closeModal()}>x</button>
      </form>
    
    </div>
    
   
  )
}

export default ModalSms;