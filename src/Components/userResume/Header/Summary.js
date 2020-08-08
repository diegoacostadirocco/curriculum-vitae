import React from 'react';
import { cvFinal } from '../../DataCV';
import './../../../css/encabezado.css';
const Summary = () => {
    return (
        <div className="sumario">
            <h3>Sumario Profesional:</h3>
            <p>{cvFinal.user.sumario}</p>
        </div>
    );
};

export default Summary;