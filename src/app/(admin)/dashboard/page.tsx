"use client"
import { useState } from 'react'

type Props = {}

export default function DashboardPage({}: Props) {

    const [validate, setValidate] = useState(false)
    const handleRevalidate = async() =>{
       const res = await fetch("http://localhost:3000/api/revalidate?tag=gallery&secret=12345678",{
            method: "POST",
        })

        const data = await res.json()

        if(data.revalidate){
            setValidate(true)
        }else{
            setValidate(false)

        }
        
    }

  return (
    <div className='container px-10 py-20'>
        <h1>{validate ? "Sudah divalidate" : "Belum di validate"}</h1>
        <button className='px-3 py-1 bg-sky-600 text-white hover:bg-sky-700 rounded' onClick={()=>handleRevalidate()}>Click</button>
    </div>
  )
}