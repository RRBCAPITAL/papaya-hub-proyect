"use client"

import React from 'react'
import { useState } from 'react'
import { createUserPrueba } from './createUserPrueba'

const DemoForm = () => {

    const [ data,  setData ] = useState({
        name: "",
        username: "",
        email: ""
    })

    const handleChange = (e) => {

        e.preventDefault()

        const { name, value } = e.target 

        setData((previus) => ({
            ...previus,
            [name]: value
        }))
    }

    console.log(data);

    const handleCreate = () => {
        console.log(data);
        createUserPrueba(data)
    }

  return (
    <div>
        <form action="" onChange={handleChange}>

            <input type="text" name='name' value={data.name} placeholder='name' />
            <input type="text" name='username' value={data.username} placeholder='username' />
            <input type="text" name='email' value={data.email} placeholder='email' />

            <button type='button' onClick={handleCreate}>Crear</button>
        </form>
    </div>
  )
}

export default DemoForm;