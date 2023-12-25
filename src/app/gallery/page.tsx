import MappingGallery from "./MappingGallery"

type Props = {}

const GalleryPage = async(props: Props) => {
  const gallery = await getData();
  return (
    <div>
        <h1>Gallery</h1>
        <MappingGallery data={gallery.data}/>
    </div>
  )
}


const getData = async () => {
    const res = await fetch('http://localhost:3000/api/gallery',{
      cache:'force-cache',
      next:{
       tags : ["gallery"]
      }
    })
    const data = await res.json();
    return data;
}

export default GalleryPage