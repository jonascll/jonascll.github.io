import Picture from "../../components/Picture/Picture"
import "./About.css"
import aboutPic from "../../Resources/aboutPic.jpg"
import cpp from "../../Resources/cpp.png"
import cppColored from "../../Resources/cpp-colored.png"
import Icon from "../../components/Icon/Icon"
import unity from "../../Resources/unity.png"
import unreal from "../../Resources/unreal.png"
import cs from "../../Resources/cs.png"
import csColored from "../../Resources/cs-colored.png"
import js from "../../Resources/js.png"
import jsColored from "../../Resources/js-colored.png"
import BarGraph from "../../components/BarGraph/BarGraph"
//import { GetSizeLetter,useWindowDimensions } from "../../utils/utils"

function About() {
    /*const { height, width } = useWindowDimensions();
    var size = GetSizeLetter({height: height, width: width})
    console.log(size)*/
        return (
            <div>
                <div className="aboutContainer">
                    <div className="aboutContent">
                        <h1 className="aboutHeader">Who is Jonas?</h1>
                        <span className="aboutText">From a young age, I ventured into video game worlds and was always fascinated by computers. During my high school years, I learned I had a knack for logical and analytical problem-solving. Then, a teacher guided me towards a more IT-oriented education for my bachelor's, which is where I learned how to program. This then led me to apply these newly learned skills in game development. Besides video games, I often visit the gym to destress after a workday.</span>
                    </div>

                    <div className="aboutPfp">
                        <Picture source={aboutPic} alt={"Me"} keepAspectRatio={true} width={700} height={700}></Picture>
                    </div>

                </div>
                <div className={"skillsetMainContainer"}>
                    <div className="skillsetContent">
                        <h1 className="skillsetHeader">Stats and proficiencies</h1>
                        <span><i>All round tech wizard</i></span>
                    </div>
                    <div className="skillsetContainer">
                        <div className="iconRow">
                            <div className="icon">
                                <Icon source={cs} originalColorSource={csColored} originalColorOnHover={true} color={"#363640"}></Icon>
                                <BarGraph insideColor={"rgb(207, 241, 241)"} insideColorSecond={"rgb(54, 54, 64)"} useGradient={true} borderColor={"#363640"} progress={75} width={150} height={30} borderThickness={3} label="Proficient" labelColor={"rgb(207, 241, 241)"} borderRadius={15}></BarGraph>
                            </div>
                            <div className="icon">
                                <Icon source={unity} originalColorSource={unity} originalColorOnHover={true} color={"#363640"}></Icon>
                                <BarGraph insideColor={"rgb(207, 241, 241)"} insideColorSecond={"rgb(54, 54, 64)"} useGradient={true} borderColor={"#363640"} progress={75} width={150} height={30} borderThickness={3} label="Proficient" labelColor={"rgb(207, 241, 241)"} borderRadius={15}></BarGraph>
                            </div>
                            <div className="icon">
                                <Icon source={unreal} originalColorSource={unreal} originalColorOnHover={true} color={"#363640"}></Icon>
                                <BarGraph insideColor={"rgb(207, 241, 241)"} insideColorSecond={"rgb(54, 54, 64)"} useGradient={true} borderColor={"#363640"} progress={50} width={150} height={30} borderThickness={3} label="Competent" labelColor={"rgb(207, 241, 241)"} borderRadius={15}></BarGraph>
                            </div>
                        </div>
                        <div className="iconRow">
                            <div className="icon">
                                <Icon source={js} originalColorSource={jsColored} originalColorOnHover={true} color={"#363640"}></Icon>
                                <BarGraph insideColor={"rgb(207, 241, 241)"} insideColorSecond={"rgb(54, 54, 64)"} useGradient={true} borderColor={"#363640"} progress={50} width={150} height={30} borderThickness={3} label="Competent" labelColor={"rgb(207, 241, 241)"} borderRadius={15}></BarGraph>
                            </div>

                            <div className="icon">
                                <Icon source={cpp} originalColorSource={cppColored} originalColorOnHover={true} color={"#363640"}></Icon>
                                <BarGraph insideColor={"rgb(207, 241, 241)"} insideColorSecond={"rgb(54, 54, 64)"} useGradient={true} borderColor={"#363640"} progress={25} width={150} height={30} borderThickness={3} label="Familiar" labelColor={"rgb(207, 241, 241)"} borderRadius={15}></BarGraph>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        )
}


export default About