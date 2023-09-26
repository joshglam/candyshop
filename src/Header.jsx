import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header id="header">
            <h1>The Candy Shop</h1>
            <nav id="nav-bar">
                <NavLink exact to="/" >
                    Home
                </NavLink>
                <NavLink to="/about" >
                    About
                </NavLink>
                <NavLink to="/contact" >
                    Contact
                </NavLink>
                <NavLink to="/form" >
                    Form
                </NavLink>
                

            </nav>
        </header>
    )
}