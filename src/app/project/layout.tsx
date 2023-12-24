import SidebarProject from '@/components/Fragments/SidebarProject'
import React from 'react'

type Props = {
    children : React.ReactNode
}

export default function ProjectLayout({children}: Props) {
  return (
    <div className='container grid grid-cols-3'>
        {/* <SidebarProject/> */}
        <div className=''>
            {children}
        </div>
    </div>
  )
}