
import "./NavbarItem.css"





function NavbarItem({text, firstItem = false, onClickDelegate, isActive = false}) {
   
    return(
        
        <span onClick={onClickDelegate} className={
    `navbarItem` + 
    `${firstItem ? " firstItem" : ""}` +
    `${isActive ? " currentSelected" : ""}`}>{text}</span>
    )
}

export default NavbarItem