import React from 'react';
import { userList } from '../../../DataCV';

const Study = () => {
    const listOfEstudios= userList.user.estudios.map(
        (objMapped) => 
        <div key={`${objMapped.title}_${objMapped.college}`} className="estudios">
            <b>{`${objMapped.title}`}</b>
            -<span>{`${objMapped.college}`}</span>
        </div>);
        return (
            <div>
                <h2>Titulo:</h2>
                {listOfEstudios}
            </div>
        );
    }

export default Study;