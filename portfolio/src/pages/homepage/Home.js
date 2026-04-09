import Button from "../../components/Button/Button"
import "./Home.css"
import pfp from "../../Resources/pfp.jpg"
import Picture from "../../components/Picture/Picture"
import resume from "../../Resources/CV Jonas Collin.pdf"
import Socials from "../../components/Socials/Socials"




function Home({pageChange}) {
    return(
        <div className="homePage">
            <div className="homeContainer">
                <h1>Jonas Collin</h1>
                <Picture circleShape={true} width={150} height={150} alt={"Me"} source={pfp}></Picture>
                <h2>Game Developer & Full-Stack Developer</h2>
                <i>Smith of immersive worlds and builder of applications</i>
            </div>
        
            <div className="buttonContainer">
                <Button onClick={() => pageChange("Projects")} width={170} height={40} text={"View my projects"}/>
                <Button onClick={() => pageChange("About")} width={170} height={40} text={"About me"}/>
                    <a href={resume} download={"resume.pdf"}>
                        <Button width={170} height={40} text={"Download my resume"}/>
                    </a>
            </div>
            <div className="socialsContainer">
                <Socials githubLink="https://github.com/jonascll"></Socials>
            </div>
        </div>
        
    )
}


export default Home