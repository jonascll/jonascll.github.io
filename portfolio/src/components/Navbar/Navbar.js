import "./Navbar.css"
import NavbarItem from "../NavbarItem/NavbarItem";

function Navbar({ items, onPageChange, selectedRoute = "/home"}) {

    
    const HandleNavbarItemClicked = ( page) => {
       
        onPageChange(page)
    }
    
    return (
        <div>
            <div className="navbar">
                {items.map((element, index) => {
                    return <NavbarItem key={index} firstItem={index === 0} text={element} isActive={element.toLowerCase() === selectedRoute.slice(1)} onClickDelegate={() => HandleNavbarItemClicked("/" + element.toLowerCase())}/>
                })}
            </div>
        </div>

    )
}




export default Navbar