import React, { useState } from "react";
import { Link } from "react-router-dom";
const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState(0)
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)

    const handleSelectedMenu = (index) => {
        setSelectedMenu(index)
    }
    const handleProfileClick = (index) => {
        setIsProfileDropdownOpen(!isProfileDropdownOpen)
    }

    const menuClass = "menu";
    const activeMenuClass = "menu selected"


    return (
        <div className="menu-container">
            <img src="logo.png" style={{ width: "50px" }} />
            <div className="menus">
                <ul>
                    <li>
                        <Link style={{ textDecoration: "none" }} to={'/'} onClick={() => handleSelectedMenu(0)}>   <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>Dashboard</p>    </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to={'/orders'} onClick={() => handleSelectedMenu(1)}>   <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>Orders</p>    </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to={'/holdings'} onClick={() => handleSelectedMenu(2)}>   <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>Holding</p>    </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to={'/positions'} onClick={() => handleSelectedMenu(3)}>   <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>Positions</p>    </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to={'/funds'} onClick={() => handleSelectedMenu(4)}>   <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>Funds</p>    </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to={'/apps'} onClick={() => handleSelectedMenu(5)}>   <p className={selectedMenu == 0 ? activeMenuClass : menuClass}>OtherApps</p>    </Link>
                    </li>
                </ul>
                <hr />
                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">ZU</div>
                    <p className="username">USERID</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;