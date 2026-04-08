import Picture from "../Picture/Picture"
import "./Socials.css"
import github from "../../Resources/github.png"
import instagram from "../../Resources/instagram.png"
import linkedIn from "../../Resources/linkedIn.png"
import facebook from "../../Resources/facebook.png"
import twitter from "../../Resources/twitter.png"

function Socials({facebookLink = "", linkedInLink="", instagramLink="", githubLink="", twitterLink=""}) {

    var twitterIcon = (twitterLink === "") ? null : <Picture alt={"twitter"} color={"#363640"} width={40} height={40} source={twitter} onClick={() => {window.open(twitterLink)}}></Picture>
    var facebookIcon = (facebookLink === "") ? null : <Picture alt={"facebook"} color={"#363640"} width={40} height={40} source={facebook} onClick={() => {window.open(facebookLink)}}></Picture>
    var linkedInIcon = (linkedInLink === "") ? null : <Picture alt={"linkedIn"} color={"#363640"} width={40} height={40} source={linkedIn} onClick={() => {window.open(linkedInLink)}}></Picture>
    var instagramIcon = (instagramLink === "") ? null : <Picture alt={"instagram"} color={"#363640"} width={40} height={40} source={instagram} onClick={() => {window.open(instagramLink)}}></Picture>
    var githubIcon = (githubLink === "") ? null : <Picture alt={"github"} color={"#363640"} width={40} height={40} source={github} onClick={() => {window.open(githubLink)}}></Picture>

    return(<div className="socialsList">
        {githubIcon}
        {linkedInIcon}
        {facebookIcon}
        {instagramIcon}
        {twitterIcon}
    </div>)
}


export default Socials