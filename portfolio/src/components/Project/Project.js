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

function Project({ title, description, githubLink, index = null, language = null, cardSizeMultiplier = 1, hovered = false, imageType = ".png" }) {

    const imageSrc = new URL(`../../Resources/${title.replace(/\s/g, "")}${imageType}`, import.meta.url)


    const handleLanguageIcon = () => {

        if (language !== null) {
            switch (language.toLowerCase()) {
                case "unity":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="Unity" source={unity} originalColorSource={unityColored} originalColorOnHover={true} color={`${hovered.hovered ? "rgb(106, 126, 126)" : "#363640"}`}></Icon></div>)

                case "unreal":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="Unreal Engine" source={unreal} originalColorSource={unrealColored} originalColorOnHover={true} color={`${hovered.hovered ? "rgb(106, 126, 126)" : "#363640"}`}></Icon></div>)

                case "cpp":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="Cpp" source={cpp} originalColorSource={cppColored} originalColorOnHover={true} color={`${hovered.hovered ? "rgb(106, 126, 126)" : "#363640"}`}></Icon></div>)

                case "c#":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="C#" source={cs} originalColorSource={csColored} originalColorOnHover={true} color={`${hovered.hovered ? "rgb(106, 126, 126)" : "#363640"}`}></Icon></div>)

                case "js":
                    return (<div className="projectIconContainer"><Icon width={150 * cardSizeMultiplier} height={150 * cardSizeMultiplier} alt="JavaScript" source={js} originalColorSource={jsColored} originalColorOnHover={true} color={`${hovered.hovered ? "rgb(106, 126, 126)" : "#363640"}`}></Icon></div>)

                default:
                    return null;
            }
        }
    }

    if (index !== null) {
        return (<div className={`${index === 0 ? "projectContainerFirst" : "projectContainer"} projectMainContainer ${(hovered.hovered && hovered.index !== index) ? "projectHidden" : ""}`}>

            <span className="projectName">{title}</span>
            <span className="projectDescription">{description}</span>
            <div className="projectPictureContainer">
                <Picture keepAspectRatio={true} height={250 * cardSizeMultiplier} source={imageSrc} alt={"projectDemo"} onClick={() => { window.open(githubLink) }} />
            </div>

            {handleLanguageIcon()}

        </div>)
    } else {
        return (<div className="projectMainContainer">

            <span className="projectName">{title}</span>
            <span className="projectDescription">{description}</span>
            <div className="projectPictureContainer">
                <Picture keepAspectRatio={true} height={250 * cardSizeMultiplier} source={imageSrc} alt={"projectDemo"} onClick={() => { window.open(githubLink) }} />
            </div>
            {handleLanguageIcon()}
        </div>)
    }

}



export default Project