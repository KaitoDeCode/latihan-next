import Image from 'next/image'
import React from 'react'

type Props = {
    data : any
}



const MappingGallery = ({data}: Props) => {
  return (
    <div className='container px-10 py-10 grid-cols-3'>
        {
            data && data.map((item:any)=>(
                <div key={item.id}>
                  <img src={item.img} alt={item.title} width={200} height={200}/>
                  <h1>{item.title}</h1>
                </div>
            ))
        }
    </div>
  )
}

export default MappingGallery