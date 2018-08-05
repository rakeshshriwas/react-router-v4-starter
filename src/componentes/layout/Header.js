import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Header extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/stores">Store</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/nestedroutes">Nested Route</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/prompt">Prompt Component</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/result?roll_num=12345">Query String</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;