import Button from "../../components/Button/Button"
import "./Home.css"
import pfp from "../../Resources/pfp.jpg"
import Picture from "../../components/Picture/Picture"
import resume from "../../Resources/CV Jonas Collin.pdf"
import Footer from "../../components/Footer/Footer"



function Home({ pageChange }) {
    return (
        <div className="homeMain">
            <div className="homePage">
                <div className="homeContainer">
                    <h1 className="homeName">Jonas Collin</h1>
                    <Picture circleShape={true} width={170} height={170} alt={"Me"} source={pfp}></Picture>
                    <h2>Game Developer & Full-Stack Developer</h2>
                    <i>Smith of immersive worlds and builder of applications</i>
                </div>

                <div className="buttonContainer">
                    <Button onClick={() => pageChange("/projects")} width={170} height={40} text={"View my projects"} />
                    <Button onClick={() => pageChange("/about")} width={170} height={40} text={"About me"} />
                    <a href={resume} download={"resume.pdf"}>
                        <Button width={170} height={40} text={"Download my resume"} />
                    </a>
                </div>




            </div>
            <div className="footerContainerHome">
                <Footer />
            </div>
            
        </div>


    )
}


export default Home