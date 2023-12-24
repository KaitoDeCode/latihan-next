"use client"

import Link from "next/link"
import { usePathname,useRouter } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();

    const disableNavbar = ["/login","/register"];

  return (
    <>
        {!disableNavbar.includes(pathname) && ( 
        <nav className="px-14 py-5 sticky top-0 flex justify-between items-center bg-sky-700 text-white z-50">
        <h1 className="font-bold">Navbar</h1>
            <ul className="flex gap-6 items-center">
                {
                    navlist.map((data,index)=>(
                        <Link key={index} href={data.url}>
                            <li className={`${pathname === data.url && 'underline-offset-2 underline font-semibold text-sky-400'}`}>{data.text}</li>
                        </Link>
                    ))
                }
                <li>
                    <button onClick={()=>router.push("/login")} className="bg-green-600 text-green-400 px-3 py-1 rounded">
                        Login
                    </button>
                </li>
            </ul>
    </nav>) }
    </>
  )
}

const navlist = [
    {
        text:"Home",
        url:"/"
    },
    {
        text:"About",
        url:"/about"
    },
    {
        text:"Project",
        url:"/project"
    },
    {
        text:"Gallery",
        url:"/gallery"
    },
    {
        text:"Profile",
        url:"/profile"
    },
]

export default Navbar