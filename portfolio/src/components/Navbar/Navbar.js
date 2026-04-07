import "./Navbar.css"
import NavbarItem from "../NavbarItem/NavbarItem";

import React, { useState } from 'react';

function Navbar({ items, onPageChange}) {

    const [activeItem, setActiveItem] = useState({ "index": 0 })
    const HandleNavbarItemClicked = (clickedIndex, page) => {
        setActiveItem({ "index": clickedIndex })
        onPageChange(page)
    }
    return (
        <div>
            <div className="navbar">
                {items.map((element, index) => {
                    return <NavbarItem key={index} firstItem={index === 0} text={element} isActive={index === activeItem.index} onClickDelegate={() => HandleNavbarItemClicked(index, element)}/>
                })}
            </div>
        </div>

    )
}




export default Navbar