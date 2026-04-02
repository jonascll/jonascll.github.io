import "./Navbar.css"
import hamburger from "./hamburger.png"

function Navbar() {
    return(
        <div>
            <div className="navbar">
                <img className="hamburgerIcon" src={hamburger}></img>
            </div>
        </div>
       
    )
}


export default Navbar