import "./Navbar.css"
import NavbarItem from "../NavbarItem/NavbarItem";

function Navbar({ items, onPageChange, selectedRoute = "Home"}) {

    
    const HandleNavbarItemClicked = ( page) => {
       
        onPageChange(page)
    }
    return (
        <div>
            <div className="navbar">
                {items.map((element, index) => {
                    return <NavbarItem key={index} firstItem={index === 0} text={element} isActive={element === selectedRoute} onClickDelegate={() => HandleNavbarItemClicked( element)}/>
                })}
            </div>
        </div>

    )
}




export default Navbar