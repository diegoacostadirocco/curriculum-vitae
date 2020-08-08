import React from 'react';
import { cvFinal } from '../../../DataCV';

const WorkHistory = () => {
    
    const listOfWorks = cvFinal.user.trabajos.map(
    (objMapped) => 
        <div key={`${objMapped.workPost}_${objMapped.company}`}>
            <b>{`${objMapped.workPost}`}</b> -<span>{`${objMapped.company}`}</span>
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