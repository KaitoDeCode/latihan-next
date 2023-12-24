import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="px-14 py-5 sticky top-0 flex justify-between items-center bg-sky-700 text-white z-50">
        <h1 className="font-bold">Navbar</h1>
            <ul className="flex gap-6">
                {
                    navlist.map((data,index)=>(
                        <Link key={index} href={data.url}>
                            <li>{data.text}</li>
                        </Link>
                    ))
                }
            </ul>
    </nav>
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