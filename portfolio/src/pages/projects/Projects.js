import { useEffect, useState } from "react"
import "./Projects.css"


import data from "../../Data/projects.json"

function Projects() {
    const [projects, setProjects] = useState([])

    
    useEffect(() => {
        setProjects(data.projects)
    }, [])
    console.log(projects)
    return (
       
        <div>
            <h1>Projects</h1>
             {projects.map((element, index) => {
            return <div><span>{element.title}</span> <span>{element.description}</span></div>
        })}
        </div>
    )
}


export default Projects