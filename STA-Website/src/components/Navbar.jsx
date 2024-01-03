import "./NavbarStyles.css"
import React from "react"

import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="header">
            <ul className="nav-menu">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/resources">Resources</Link>
                </li>
                <li>
                    <Link to="/podcasts">Podcasts</Link>
                </li>
            </ul>
        </div>
        
    )
}

export default Navbar;