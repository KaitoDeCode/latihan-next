"use client"
import {useRouter} from "next/navigation"

type Props = {
    data:any
}

export default function MapingProject({
    data
}: Props) {

     const project = data;
    const router = useRouter();
  return (
    <>
         {
              project && project.map((data:any)=>(
                <div key={data.id} className="shadow-sm col-span-1 px-3 py-2 border">
                  <img src={data.thumbnail} alt={data.title} width={200} />
                  <h3>{data.title}</h3>
                 <button onClick={()=>router.push("/project/"+data.id)} className="px-3 py-1 bg-sky-600 rounded text-white">Detail</button>
                </div>
              ))
            }
    </>
  )
}