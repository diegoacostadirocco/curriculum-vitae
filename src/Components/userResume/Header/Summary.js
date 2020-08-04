import React from 'react';
import { userList } from '../../DataCV';
import './../../../css/encabezado.css';
const Summary = () => {
    return (
        <div className="sumario">
            <h3>Sumario Profesional:</h3>
            <p>{userList.user.sumario}</p>
        </div>
    );
};

export default Summary;