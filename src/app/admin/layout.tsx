
type Props = {
    children : React.ReactNode,
    kelola_pembayaran : React.ReactNode,
    history : React.ReactNode
}

export default function layoutAdmin({children,history,kelola_pembayaran}: Props) {
  return (
    <div className="flex">
        <div className="bg-slate-800 w-1/6 h-screen sticky   top-0 px-5 py-10">
            <h1 className="text-slate-200 font-bold">Sidebar</h1>
        </div>
        <div className="w-full">
          <div className="container p-10">
              {children}
          </div>
          <div className="container grid grid-cols-2 p-10 gap-4">
              {kelola_pembayaran}
              {history}
          </div>
        </div>
    </div>
  )
}