import React from 'react';
import { Link }from 'react-router-dom';
import './../css/home.css';

const Nav = () => {
    return (
    
        <div className="ui inverted massive menu">
            <Link to="/">
                <li className="active item">Inicio</li>
            </Link>
            <Link to="/example-resume">
                <li className="item">Ejemplo</li>
            </Link>
            <Link to="/create-resume">
                <li className="item">Crea tu CV</li>
            </Link>
        </div>
    );
};

export default Nav;