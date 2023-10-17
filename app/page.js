"use client"

import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Inicio from '@/components/Inicio/Inicio'

export default function Home() {
  
  return (
    <>
      <main className='dark:bg-white flex'>
        <Inicio />
      </main>
    </>
  )
}