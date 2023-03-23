import "../../utils/style/main.css"
import "../../utils/style/accueil.css"
import logo from "../../assets/LOGO.png"
import React from "react"
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="kasa" />
            <nav className="header-menu">
                <NavLink className="navlink" to="/">
                    Accueil
                </NavLink>
                <NavLink className="navlink" to="/Apropos">
                    A propos
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
