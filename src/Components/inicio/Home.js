import React from 'react';
import '../../css/home.css';
import { Link }from 'react-router-dom';
import { RiGithubLine } from 'react-icons/ri';
import PieDePagina from './PieDePagina';
import CreateResumeForm from '../CreateResumeForm';

const Home = () => {
    return (
        <div>
            <div className="ui container new-resume-form">
                <h3 className="ui block header">Haz tu Curriculum en 1 solo paso</h3>
                <h1 style={{textAlign:"center"}}> Esto es HURRAY!</h1>
                <div className="ui brown message message">
                    En la siguiente pagina podras ver mi Curriculum personal para que te sirva de ejemplo.
    En la plantilla <Link to="/create-resume"><li>CREA TU CV</li></Link> podras ingresar tus datos y disfrutar de tu propio CV.
                    Buscas trabajo? Nosotros te ayudamos, Hurray!
                </div>
                <br/>
                <PieDePagina />
            </div>
            <div className="ui inverted vertical masthead center aligned segment">
                <a href="https://github.com/diegoacostadirocco" 
                   className="item" target="_blank" rel="noopener noreferrer">
                    <RiGithubLine />
                    <h3 className="ui inverted header">
                        https://github.com/diegoacostadirocco
                    </h3>
                </a>
            </div>
       </div>
    );
};

export default Home;