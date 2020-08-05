import React, { useState } from "react";
import { BsTrash } from 'react-icons/bs';

const FormSheetStudies = () => {
    const [estudios, setEstudios] = useState([
        { title: "", college: "" }
      ]);

      const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const study = [...estudios];
        study[index][name] = value;
        setEstudios(study);
      };
      const handleRemoveClick = index => {
        const study = [...estudios];
        study.splice(index, 1);
        setEstudios(study);
      };
      const handleAddClick = () => {
        setEstudios([...estudios, { title: "", college: "" }]);
      };
  
  return (
    <div>
     {estudios.map((x, i) => {
        return(
      <div key={`${x} ${i}`} className="required fields">
        <div className="field">
          <label>Estudio</label>
          <input
            name="title"
            type="text"
            placeholder="¿Que estudiaste?"
            value={x.title}
            onChange={e =>handleInputChange (e, i)}
            maxLength="20"
          />
        </div>
        <div className="field">
          <label>Universidad/Instituto</label>
          <input
            name="college"
            type="text"
            placeholder="¿Donde lo estudiaste?"
            value={x.college}
            onChange={e => handleInputChange(e, i)}
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