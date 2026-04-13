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
                    <h1 className="projectsName">Projects</h1>
                </div>
                <div className="projectItemsContainer">
                    {projects.map((element, index) => {
                        return <div onMouseOver={() => { setHoveredCard({ hovered: true, index: index }) }} onMouseLeave={() => {
                            setHoveredCard({ hovered: false, index: null });
                            document.body.style.pointerEvents = 'none';

                            setTimeout(() => {
                                document.body.style.pointerEvents = 'auto';
                            }, 300);

                        }} className={`${(hoveredCard.hovered && hoveredCard.index !== index) ? "porjectItemHidden" : "projectItem"}`}><Project cardSizeMultiplier={0.6} key={index} title={element.title} description={element.description} githubLink={element.githubLink} index={index} language={element.language} hoveredSizeMultiplier={2} hovered={hoveredCard} /></div>
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