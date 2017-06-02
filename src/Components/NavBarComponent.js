import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                     <a className="navbar-brand" href="#">Sample ToDO app</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/add">Add To Do</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default NavBar;