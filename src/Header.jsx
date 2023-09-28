import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <h1>The Candy Shop</h1>
            <ul className="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/form">Form</a></li>             

            </ul>
        </header>
    )
}
