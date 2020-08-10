import React from 'react';

const WorkHistory = (props) => {
    const listOfWorks = props.cv.trabajos.map(
        (trabajo) =>
            <div key={`${trabajo.workPost}_${trabajo.company}_${trabajo.endDate}`}>
                <b>{`${trabajo.workPost}`}</b> -<span>{`${trabajo.company}`}</span>
                <br/>
                 Fecha de finalizacion:<span>{`${trabajo.endDate}`}</span>
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