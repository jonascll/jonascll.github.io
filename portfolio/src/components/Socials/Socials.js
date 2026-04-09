import Icon from "../Icon/Icon"
import "./Socials.css"
import github from "../../Resources/github.png"
import instagram from "../../Resources/instagram.png"
import linkedIn from "../../Resources/linkedIn.png"
import facebook from "../../Resources/facebook.png"
import twitter from "../../Resources/twitter.png"

function Socials({facebookLink = "", linkedInLink="", instagramLink="", githubLink="", twitterLink=""}) {

    var twitterIcon = (twitterLink === "") ? null : <Icon alt={"twitter"} color={"#363640"} width={40} height={40} source={twitter} onClick={() => {window.open(twitterLink)}}/>
    var facebookIcon = (facebookLink === "") ? null : <Icon alt={"facebook"} color={"#363640"} width={40} height={40} source={facebook} onClick={() => {window.open(facebookLink)}}/>
    var linkedInIcon = (linkedInLink === "") ? null : <Icon alt={"linkedIn"} color={"#363640"} width={40} height={40} source={linkedIn} onClick={() => {window.open(linkedInLink)}}/>
    var instagramIcon = (instagramLink === "") ? null : <Icon alt={"instagram"} color={"#363640"} width={40} height={40} source={instagram} onClick={() => {window.open(instagramLink)}}/>
    var githubIcon = (githubLink === "") ? null : <Icon alt={"github"} color={"#363640"} width={40} height={40} source={github} onClick={() => {window.open(githubLink)}}/>

    return(<div className="socialsList">
        {githubIcon}
        {linkedInIcon}
        {facebookIcon}
        {instagramIcon}
        {twitterIcon}
    </div>)
}


export default Socials