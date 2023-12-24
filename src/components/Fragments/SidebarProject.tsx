import React from 'react'

type Props = {}

export default function SidebarProject({}: Props) {
  return (
    <nav className='w-40 h-screen bg-sky-700 fixed top-14 left-0 py-10 px-5'>
        <div>
            <span className='text-2xl font-semibold text-white'>Sidebar</span>
        </div>
        <ul className='flex flex-col gap-2 mt-3'>
            <li className='font-semibold '>Web</li>
            <li className='font-semibold '>App</li>
            <li className='font-semibold '>UI & UX</li>
        </ul>
    </nav>
  )
}