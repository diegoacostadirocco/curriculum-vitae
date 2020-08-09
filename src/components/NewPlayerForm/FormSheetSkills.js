import React, { useState } from "react";
import { BsTrash } from 'react-icons/bs';
import { cvBorrador } from "../../DataCV";
import { InputCvBorrador, InputNumericoCvBorrador } from "../shared/BorradorInputs";

const FormSheetSkills = () => {

  const [expertise, setExpertise] = useState(cvBorrador.user.expertise);

  const handleRemoveClick = index => {
    const exp = [...expertise];
    exp.splice(index, 1);
    cvBorrador.user.expertise = exp;
    setExpertise(exp);
  };
  const handleAddClick = () => {
    const nuevosExpertise = [...expertise, { skill: "", seminary: "", school: "", stars:"" }];
    cvBorrador.user.expertise = nuevosExpertise
    setExpertise(nuevosExpertise);
  };
  return (
    <div>
        {expertise.map((skill, i) => {
        return(
            <div key={`${skill} ${i}`}  className="fields">
                <div className="field">
                <label>Aptitudes</label>
                <InputCvBorrador
                    nombreDelCampo={`expertise[${i}.skill]`}
                    placeholder="¿Que otra aptitud posees?"
                    maxLength="20"
                />
                </div>
                <div className="field">
                <label>Seminario</label>
                <InputCvBorrador
                    nombreDelCampo={`expertise[${i}.seminary]`}
                    maxLength="20"
                    placeholder="Nombre del curso"
                />
                </div>
                <div className="field">
                <label>Portal</label>
                <InputCvBorrador
                    nombreDelCampo={`expertise[${i}.school]`}
                    placeholder="¿Donde la aprendiste?"
                    maxLength="20"
                />
                </div>
                <div className="field">
                <label>Nivel de manejo</label>
                <InputNumericoCvBorrador
                    nombreDelCampo={`expertise[${i}.stars]`}
                    placeholder="1=JR, 5=MASTER"
                    min="1"
                    max="5"
                /> 
                </div> 
            <div style={{textAlign:"center"}}>
            {expertise.length !== 1 && (
              <button className="ui button" onClick={() => handleRemoveClick(i)}>
                <BsTrash />
              </button>
            )}
            {expertise.length - 1 === i && (
              <button style={{margin:"5px"}}className="ui button" onClick={handleAddClick}>
                Agregar Skill
              </button>
            )}
      </div> 
    </div>
      )})}
  </div>)
}

export default FormSheetSkills;
