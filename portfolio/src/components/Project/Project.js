import "./Project.css"
import Picture from "../Picture/Picture"
import cpp from "../../Resources/cpp.png"
import cppColored from "../../Resources/cpp-colored.png"
import Icon from "../../components/Icon/Icon"
import unity from "../../Resources/unity.png"
import unreal from "../../Resources/unreal.png"
import cs from "../../Resources/cs.png"
import csColored from "../../Resources/cs-colored.png"
import js from "../../Resources/js.png"
import jsColored from "../../Resources/js-colored.png"
import unityColored from "../../Resources/unity-colored.png"
import unrealColored from "../../Resources/unreal-colored.png"

function Project({ title, description, githubLink, index = null, language = null, cardSizeMultiplier = 1 ,hovered= false, hoveredSizeMultiplier = 3}) {

    const imageSrc = new URL(`../../Resources/${title}.gif`, import.meta.url)
   
    if(hovered.hovered) {
        if(hovered.index === index) {
            cardSizeMultiplier = hoveredSizeMultiplier
        } 
        
    }
    const handleLanguageIcon = () => {

        if (language !== null) {
            switch (language.toLowerCase()) {
                case "unity":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="Unity" source={unity} originalColorSource={unityColored} originalColorOnHover={true} color={"#363640"}></Icon></div>)

                case "unreal":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="Unreal Engine" source={unreal} originalColorSource={unrealColored} originalColorOnHover={true} color={"#363640"}></Icon></div>)

                case "cpp":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="Cpp" source={cpp} originalColorSource={cppColored} originalColorOnHover={true} color={"#363640"}></Icon></div>)

                case "c#":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="C#" source={cs} originalColorSource={csColored} originalColorOnHover={true} color={"#363640"}></Icon></div>)

                case "js":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="JavaScript" source={js} originalColorSource={jsColored} originalColorOnHover={true} color={"#363640"}></Icon></div>)

                default:
                    return null;
            }
        }
    }

    if (index !== null) {
        return (<div className={`${index === 0 ? "projectContainerFirst" : "projectContainer"} projectMainContainer ${(hovered.hovered && hovered.index !== index) ? "projectHidden": ""}`}>

            <span className="projectName">{title}</span>
            <span className="projectDescription">{description}</span>
            <Picture keepAspectRatio={true} height={250 * cardSizeMultiplier} source={imageSrc} alt={"projectDemo"} onClick={() => { window.open(githubLink) }} />
            {handleLanguageIcon()}

        </div>)
    } else {
        return (<div className="projectMainContainer">

            <span className="projectName">{title}</span>
            <span className="projectDescription">{description}</span>
            <Picture keepAspectRatio={true} height={250 * cardSizeMultiplier} source={imageSrc} alt={"projectDemo"} onClick={() => { window.open(githubLink) }} />
            {handleLanguageIcon()}
        </div>)
    }

}



export default Project