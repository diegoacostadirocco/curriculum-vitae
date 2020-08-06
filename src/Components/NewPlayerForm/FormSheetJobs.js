import React, { useState } from "react";
import { BsTrash } from 'react-icons/bs';

const FormSheetJobs = () => {

  const [trabajos, setTrabajos] = useState([
    { workPost: "", company: "", lastDate: "" }
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const work = [...trabajos];
    work[index][name] = value;
    setTrabajos(work);
    console.log({trabajos});
  };
  const handleRemoveClick = index => {
    const work = [...trabajos];
    work.splice(index, 1);
    setTrabajos(work);
  };
  const handleAddClick = () => {
    setTrabajos([...trabajos, { workPost: "", company: "", lastDate: "" }]);
  };
  return (
    <div>
    {trabajos.map((x, i) => {
        return(
        <div key={`${x} ${i}`} className="fields">
            <div className="field">
            <label>Tu ultimo trabajo</label>
            <input
                name="workPost"
                type="text"
                placeholder="¿De que trabajas/abas?"
                value={x.workPost}
                onChange={e => handleInputChange(e, i)}
                maxLength="30"
            />
            </div>
            <div className="field">
            <label>Empresa</label>
            <input
                name="company"
                type="text"
                placeholder="¿Donde?"
                value={x.company}
                onChange={e => handleInputChange(e, i)}
                maxLength="30"
            />
            </div>
            <div className="field">
            <label>Fecha de finalizacion</label>
            <input
                type="text"
                name="lastDate"
                placeholder="MM-YYYY"
                value={x.lastDate}
                onChange={e => handleInputChange(e, i)}
                className="number-input"
                maxLength="7"
            />
            </div>
            <div style={{textAlign:"center"}}>
              {trabajos.length !== 1 && (
                <button className="ui button" onClick={() => handleRemoveClick(i)}>
                  <BsTrash />
                </button>
              )}
              {trabajos.length - 1 === i && (
              <button style={{margin:"5px"}}className="ui button" onClick={handleAddClick}>
              Agregar Trabajo
                </button>
              )}
        </div> 
      </div>
        )})}
    </div>)
}
export default FormSheetJobs;