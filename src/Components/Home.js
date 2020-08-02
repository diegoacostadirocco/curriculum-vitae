import React from 'react';
import '../css/home.css';
import PieDePagina from './Footer/PieDePagina';
import { RiGithubLine } from 'react-icons/ri';
import CreateResumeForm from './CreateResumeForm';

const Home = () => {
    return (
        <div>
            <div className="ui container new-resume-form">
                <h3 class="ui block header">Haz tu Curriculum en 1 solo paso</h3>
                <h1 style={{textAlign:"center"}}> Esto es HURRAY!</h1>
                <div class="ui brown message">
                    En la siguiente pagina te dejo mi Curriculum personal para que te sirva de ejemplo.
                    En la plantilla <a href="./CreateResumeForm">CREA TU CV</a> podras llenar con tus datos y disfrutar de tu propio CV.
                    Buscas trabajo? Hurray!
                </div>
                <br/>
                <PieDePagina />
            </div>
            <div class="ui inverted vertical masthead center aligned segment">
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