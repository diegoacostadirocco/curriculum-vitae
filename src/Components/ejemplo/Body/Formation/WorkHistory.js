import React from 'react';
import { example } from '../../../DataCV';

const WorkHistory = () => {
    
    const listOfWorks = example.persona.trabajos.map(
    (objMapped) => 
        <div key={`${objMapped.workPost}_${objMapped.company}`}>
            <li>{`${objMapped.workPost} - ${objMapped.company}`}</li>
            <br/>
        </div>);
    return (
        <div>
            <h2>Experiencia:</h2>
            {listOfWorks}
        </div>
    );
}

export default WorkHistory;