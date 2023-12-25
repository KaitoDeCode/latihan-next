import MapingProject from "./MapingProject";
type Props = {}

const getData = async() =>{
  const res = await fetch(`${process.env.API_URL}/project`,{
    cache: "no-store"
  })
  if(!res.ok){
    throw new Error("failed to fetch data")
  }
  return res.json()
}

const ProjectPage = async(props: Props) => {
  const project = await getData();

  return (
        <div className="flex flex-wrap justify-between grid-cols-3 align-middle items-center mb-10 gap-4 px-10 py-10">
           <MapingProject data={project.data}/>
        </div>
  )
}

export default ProjectPage