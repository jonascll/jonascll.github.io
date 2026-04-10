import Icon from "../Icon/Icon"
import "./Socials.css"
import github from "../../Resources/github.png"
import instagram from "../../Resources/instagram.png"
import linkedIn from "../../Resources/linkedIn.png"
import facebook from "../../Resources/facebook.png"
import twitter from "../../Resources/twitter.png"
import githubColored from "../../Resources/github-colored.png"
import instagramColored from "../../Resources/instagram-colored.png"
import linkedInColored from "../../Resources/linkedIn-colored.png"
import facebookColored from "../../Resources/facebook-colored.png"

function Socials({facebookLink = "", linkedInLink="", instagramLink="", githubLink="", twitterLink="", iconSize = 40, iconColor="#363640"}) {

    var twitterIcon = (twitterLink === "") ? null : <Icon alt={"twitter"} color={iconColor} width={iconSize} height={iconSize} source={twitter}  originalColorOnHover={true} onClick={() => {window.open(twitterLink)}}/>
    var facebookIcon = (facebookLink === "") ? null : <Icon alt={"facebook"} color={iconColor} width={iconSize} height={iconSize} source={facebook} originalColorSource={facebookColored}  originalColorOnHover={true} onClick={() => {window.open(facebookLink)}}/>
    var linkedInIcon = (linkedInLink === "") ? null : <Icon alt={"linkedIn"} color={iconColor} width={iconSize} height={iconSize} source={linkedIn}  originalColorOnHover={true} originalColorSource={linkedInColored} onClick={() => {window.open(linkedInLink)}}/>
    var instagramIcon = (instagramLink === "") ? null : <Icon alt={"instagram"} color={iconColor} width={iconSize} height={iconSize} source={instagram} originalColorOnHover={true} originalColorSource={instagramColored} onClick={() => {window.open(instagramLink)}}/>
    var githubIcon = (githubLink === "") ? null : <Icon alt={"github"} color={iconColor} width={iconSize} height={iconSize} originalColorOnHover={true} originalColorSource={githubColored} source={github} onClick={() => {window.open(githubLink)}}/>

    return(<div className="socialsList">
        {githubIcon}
        {linkedInIcon}
        {facebookIcon}
        {instagramIcon}
        {twitterIcon}
    </div>)
}


export default Socials