import React from 'react';

const Study = (props) => {
    const listOfEstudios= props.cv.estudios.map(
        (estudio) => 
        <div key={`${estudio.title}_${estudio.college}`} className="estudios">
            <b>{`${estudio.title}`}</b>
            -<span>{`${estudio.college}`}</span>
        </div>);
        return (
            <div>
                <h2>Titulo:</h2>
                {listOfEstudios}
            </div>
        );
    }

export default Study;