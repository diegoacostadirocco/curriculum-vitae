import React from 'react';
import { Link }from 'react-router-dom';
import './../css/home.css';

const Nav = () => {
    
    return (
        <div className="ui three inverted item menu">
            <Link to="/" className="blue item">
                <a href='./Home.js'>Inicio</a>
            </Link>
            <Link to="/example-resume" className="teal item"> 
                <a href="./ExampleCV.js">Ejemplo</a>
            </Link>
            <Link to="/create-resume" className="olive item"> 
                <a href="./CreateResumeForm.js">Crea tu CV</a>
            </Link> 
        </div>
    );
};

export default Nav;