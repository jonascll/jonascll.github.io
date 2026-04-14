import { useEffect, useState } from "react"
import "./Projects.css"


import data from "../../Data/projects.json"
import Footer from "../../components/Footer/Footer"
import Project from "../../components/Project/Project"

function Projects() {
    const [projects, setProjects] = useState([])
    const [hoveredCard, setHoveredCard] = useState({ hovered: false, index: null })

    useEffect(() => {
        setProjects(data.projects)
    }, [])

    return (
        <div className="projectsMain">
            <div className="projectsPage">
                <div className="projectsNameContainer">
                    <h1 className={`projectsName ${hoveredCard.hovered ? "projectsNameHidden" : ""}`}>Projects</h1>
                </div>
                <div className="projectItemsContainer">
                    {projects.map((element, index) => {
                      
                        return  <div className="mainProjectItemContainer">
                            <div key={index} onMouseEnter={() => { setHoveredCard({ hovered: true, index: index }) }}
                            onMouseLeave={() => { setHoveredCard({ hovered: false, index: null }); }}
                            className={`${(hoveredCard.hovered && hoveredCard.index !== index) ? "projectItemHidden" : "projectItem"}`}
                            style={{
                                zIndex: hoveredCard.hovered ? 100 : 1,
                                transform: (hoveredCard.hovered && hoveredCard.index === index) ? 'scale(1.8)' : 'scale(1)',
                                
                            }}>
                            <div>
                                <Project imageType={element.imageType} cardSizeMultiplier={0.6} title={element.title} description={element.description} githubLink={element.githubLink} index={index} language={element.language} hoveredSizeMultiplier={2} hovered={hoveredCard} />
                            </div>
                        </div>
                    </div>
                    })}
                </div>
            </div>
            <div className="footerContainerProjects">
                <Footer />
            </div>

        </div>

    )
}


export default Projects