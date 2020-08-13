import './css/newResumeForm.css';
import React from 'react';
import {Redirect} from 'react-router-dom';
import FormSheetHeader from './components/NewPlayerForm/FormSheetHeader';
import FormSheetStudies from './components/NewPlayerForm/FormSheetStudies';
import FormSheetJobs from './components/NewPlayerForm/FormSheetJobs';
import FormSheetSkills from './components/NewPlayerForm/FormSheetSkills';
import FormSheetContacto from './components/NewPlayerForm/FormSheetContacto';
import DownBar from './components/shared/DownBar';
import { cvFinal } from './DataCV';
import {cvBorrador} from './DataCV';

const CreateResumeForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        cvFinal.user = cvBorrador.user;
        window.alert("Cargado con exito! Accede a TU CV para ver el resultado");
        // window.location.href='/user-resume';
        return(<Redirect push to="/user-resume" />);
    }

    return (
    <div>
        <div className="ui container new-resume-form">
            <h1 style={{textAlign:"center"}}>CREA TU CV.</h1>
            <form action="/user-resume" onSubmit={handleSubmit} className="ui equal width form">
                <FormSheetHeader />
                <br/>
                <div className="ui horizontal divider">Estudios</div>
                <FormSheetStudies />
                <br/>
                <div className="ui horizontal divider">Trabajos</div>
                <FormSheetJobs />
                <br/>
                <div className="ui horizontal divider">Aptitudes extras</div>
                <FormSheetSkills />
                <br/>
                <div className="ui horizontal divider">Contacto</div>
                <FormSheetContacto />
                <br/>
                <div className="botonSubmit">
                <button className="ui primary button" type="submit">Guardar</button>
                <button className="ui button">Cancelar</button>
                </div>
            </form>
        </div>
        <DownBar />
    </div>
    );
};

export default CreateResumeForm;