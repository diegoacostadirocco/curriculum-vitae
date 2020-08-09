import React, { useState } from "react";
import { BsTrash } from 'react-icons/bs';
import { cvBorrador } from "../../DataCV";
import { InputCvBorrador } from "../shared/BorradorInputs";


const FormSheetStudies = () => {
    const [estudios, setEstudios] = useState(cvBorrador.user.estudios);

      const handleRemoveClick = index => {
        const study = [...estudios];
        study.splice(index, 1);
        setEstudios(study);
      };
      const handleAddClick = () => {
        const nuevosEstudios = [...estudios, { title: "", college: "" }];
        cvBorrador.user.estudios = nuevosEstudios;
        setEstudios(nuevosEstudios);
      };
  
  return (
    <div>
     {estudios.map((estudio, i) => {
        return(
      <div key={`${estudio} ${i}`} className="required fields">
        <div className="field">
          <label>Estudio</label>
          <InputCvBorrador
            nombreDelCampo={`estudios[${i}].title`}
            placeholder="¿Que estudiaste?"
            maxLength="30"
          />
        </div>
        <div className="field">
          <label>Universidad/Instituto</label>
          <InputCvBorrador
          nombreDelCampo={`estudios[${i}].college`}
            placeholder="¿Donde lo estudiaste?"
            maxLength="20"
          />
        </div>
        <div style={{textAlign:"center"}}>
              {estudios.length !== 1 && (
                <button className="ui button" onClick={() => handleRemoveClick(i)}>
                  <BsTrash />
                </button>
              )}
              {estudios.length - 1 === i && (
              <button style={{margin:"5px"}}className="ui button" onClick={handleAddClick}>
              Agregar estudio
                </button>
              )}
        </div> 
      </div>
        )})}
    </div>)
    
};
    

export default FormSheetStudies;