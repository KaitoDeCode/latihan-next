import React from 'react'

type Props = {}

export default function Loading({}: Props) {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center'>
        <h1 className='text-4xl animate-pulse'>Loading masbro</h1>
    </div>
  )
}