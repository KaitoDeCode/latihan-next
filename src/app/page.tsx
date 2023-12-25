import Image from 'next/image'

interface ParalelRoute{
  analystics   : React.ReactNode
}

export default function Home({analystics}:ParalelRoute) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className='bg-slate-800 w-full h-96 rounded-[10px] flex items-center justify-center'>
          <h1 className='text-slate-200 text-3xl font-bold'>Hellow Browqu howar yu</h1>
      </div>
    </main>
  )
}