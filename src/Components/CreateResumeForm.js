import '../css/newResumeForm.css';
import React from 'react';
import FormSheetHeader from './NewPlayerForm/FormSheetHeader';
import FormSheetStudies from './NewPlayerForm/FormSheetStudies';
import FormSheetJobs from './NewPlayerForm/FormSheetJobs';
import FormSheetSkills from './NewPlayerForm/FormSheetSkills';
import FormSheetContacto from './NewPlayerForm/FormSheetContacto';


const CreateResumeForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("form has been submited")
    }

    return (
    <div className="ui container new-resume-form">
        <h1 style={{textAlign:"center"}}>CREATE YOUR RESUME.</h1>
        <br/>
        <form onSubmit={handleSubmit} className="ui equal width form">
            <FormSheetHeader />
            <br/>
            <FormSheetStudies />
            <br/>
            <FormSheetJobs />
            <br/>
            <FormSheetSkills />
            <br/>
            {/* <FormSheetQuote /> */}
            {/* <br/> */}
            <FormSheetContacto />
            <button className="ui primary button" type="submit">Submit</button>
            <button className="ui button">Cancelar</button>
        </form>
    </div>
    );
};

export default CreateResumeForm;