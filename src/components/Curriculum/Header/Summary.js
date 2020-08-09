import React from 'react';
import './../../../css/encabezado.css';


const Summary = (props) => {
    return (
        <div className="sumario">
            <h3>Sumario Profesional:</h3>
            <p>{props.cv.sumario}</p>
        </div>
    );
};

export default Summary;