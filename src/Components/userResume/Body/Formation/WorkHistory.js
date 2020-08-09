import React from 'react';
import {cvFinal} from '../../../DataCV';

const WorkHistory = () => {
    const listOfWorks = cvFinal.user.trabajos.map(
        (trabajo) =>
            <div key={`${trabajo.workPost}_${trabajo.company}`}>
                <b>{`${trabajo.workPost}`}</b> -<span>{`${trabajo.company}`}</span>
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