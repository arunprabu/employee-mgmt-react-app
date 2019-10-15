import React from 'react';
import { NavLink } from "react-router-dom";

//Functional Component
function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="#">Employee Management App</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExampleDefault"
                    aria-controls="navbarsExampleDefault"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to="/" 
                                className="nav-link">
                                Home <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/employees" 
                            className="nav-link">
                                Employees</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" 
                            className="nav-link">About</NavLink>
                        </li>

                    </ul>

                </div>
            </nav>;
        </header>
    )
}

export default Header;