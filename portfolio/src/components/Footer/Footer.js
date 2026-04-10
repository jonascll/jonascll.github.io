import "./Footer.css"
import Icon from "../Icon/Icon"
import gmailColored from "../../Resources/gmail-colored.png"
import gmail from "../../Resources/gmail.png"
import phone from "../../Resources/phone.png"
import Socials from "../Socials/Socials"

function Footer() {
    const onEmailClick = () => {
            window.location.href="mailto:jonascollin100@gmail.com"
    }

    return (
        <div className="footerMain">
            <div className="contactMeMainContainer" >
                <div className="contactHeader">
                    <h2>Hire me!</h2>
                </div>

                <div className="contactMeSection">

                    <div className="contactIconContainer">
                        <div className="contactItem">
                            <Icon alt="Phone" width={40} height={40} source={phone} originalColorSource={phone} originalColorOnHover={true} color={"rgb(106, 126, 126)"}></Icon>
                            <span>
                                +32 471 37 77 34
                            </span>
                        </div>
                        <div className="contactItem">
                            <Icon alt="Email" width={50} height={50} source={gmail} originalColorSource={gmailColored} originalColorOnHover={true} color={"rgb(106, 126, 126)"} onClick={onEmailClick}></Icon>
                            <span>
                                jonascollin100@gmail.com
                            </span>
                        </div>


                    </div>

                </div>
            </div>
            <div className="socialsSection">
                <div className="socialsHeader">
                    <h2>Socials</h2>
                    <div className="socialsContainer">

                      
                    </div>
                </div>
                  <Socials iconColor="rgb(106, 126, 126)" githubLink="https://github.com/jonascll" linkedInLink="https://www.linkedin.com/in/jonas-collin-a86b0717b/" iconSize={50}/>
            </div>

        </div>
    )
}


export default Footer
