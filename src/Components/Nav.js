import React from 'react';
import { Link }from 'react-router-dom';
import './../css/home.css';

const Nav = () => {
    
    return (
        <div style={{listStyle: "none"}} className="ui huge three inverted item menu">
            <Link to="/" className="blue item">
                <li href='./Home.js'>Inicio</li>
            </Link>
            <Link to="/example-resume" className="teal item"> 
                <li href="./ExampleCV.js">Ejemplo</li>
            </Link>
            <Link to="/create-resume" className="olive item"> 
                <li href="./CreateResumeForm.js">Crea tu CV</li>
            </Link> 
        </div>
    );
};

export default Nav;