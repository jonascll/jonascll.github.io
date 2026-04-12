import { useEffect, useState } from "react"
import "./Projects.css"


import data from "../../Data/projects.json"
import Footer from "../../components/Footer/Footer"

function Projects() {
    const [projects, setProjects] = useState([])

    
    useEffect(() => {
        setProjects(data.projects)
    }, [])
    
    return (
       <div className="projectsMain">
        <div className="projectsPage">
            <h1>Projects</h1>
             {projects.map((element, index) => {
            return <div key={index}><span>{element.title}</span> <span>{element.description}</span></div>
        })}
       
        </div>
        <div className="footerContainerProjects">
             <Footer/>
        </div>
        
       </div>
        
    )
}


export default Projects