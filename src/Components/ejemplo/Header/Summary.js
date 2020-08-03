import React from 'react';
import { example } from '../../DataCV';
import './../../../css/encabezado.css';
const Summary = () => {
    return (
        <div className="sumario">
            <h3>Sumario Profesional:</h3>
            <p>{example.persona.sumario}</p>
        </div>
    );
};

export default Summary;