import React from 'react';
import { NavLink }from 'react-router-dom';
import './../css/home.css';

const Nav = () => {

    return (
        <div style={{listStyle: "none"}} className="ui huge four inverted item menu">
            <NavLink to="/" exact activeStyle={{color:"grey"}} className="item">
                Inicio
            </NavLink>
            <NavLink to="/example-resume" activeStyle={{color:"grey"}} className="item"> 
                Ejemplo
            </NavLink>
            <NavLink to="/create-resume" activeStyle={{color:"grey"}} className="item"> 
                Crea tu CV
            </NavLink> 
            <NavLink to="/user-resume" activeStyle={{color:"grey"}} className="item"> 
                Tu CV
            </NavLink> 
        </div>
    );
};

export default Nav;