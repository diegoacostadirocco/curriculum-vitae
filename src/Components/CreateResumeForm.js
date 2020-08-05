import '../css/newResumeForm.css';
import React from 'react';
import FormSheetHeader from './NewPlayerForm/FormSheetHeader';
import FormSheetStudies from './NewPlayerForm/FormSheetStudies';
import FormSheetJobs from './NewPlayerForm/FormSheetJobs';
import FormSheetSkills from './NewPlayerForm/FormSheetSkills';
import FormSheetContacto from './NewPlayerForm/FormSheetContacto';


const CreateResumeForm = () => {

    const handleSubmit = (event, data) => {
        event.preventDefault();
        console.log(data);
    }

    return (
    <div className="ui container new-resume-form">
        <h1 style={{textAlign:"center"}}>CREA TU CV.</h1>
        <form  onSubmit={handleSubmit} className="ui equal width form">
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
    );
};

export default CreateResumeForm;