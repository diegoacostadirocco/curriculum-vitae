import React, { useState } from "react";
import { BsTrash } from 'react-icons/bs';

const FormSheetSkills = () => {

  const [expertise, setExpertise] = useState([
    { skill: "", seminary: "", school: "", stars:"" }
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const exp = [...expertise];
    exp[index][name] = value;
    setExpertise(exp);
  };
  const handleRemoveClick = index => {
    const exp = [...expertise];
    exp.splice(index, 1);
    setExpertise(exp);
  };
  const handleAddClick = () => {
    setExpertise([...expertise, { skill: "", seminary: "", school: "", stars:"" }]);
  };
  return (
    <div>
        {expertise.map((x, i) => {
        return(
            <div key={`${x} ${i}`}  className="fields">
                <div className="field">
                <label>Aptitudes</label>
                <input
                    name="skill"
                    type="text"
                    placeholder="¿Que otra aptitud posees?"
                    value={x.skill}
                    onChange={e => handleInputChange(e, i)}
                    maxLength="20"
                />
                </div>
                <div className="field">
                <label>Seminario</label>
                <input
                    name="seminary"
                    type="text"
                    placeholder="Nombre del curso"
                    value={x.seminary}
                    onChange={e => handleInputChange(e, i)}
                    maxLength="30"
                />
                </div>
                <div className="field">
                <label>Portal</label>
                <input
                    name="school"
                    type="text"
                    placeholder="¿Donde la aprendiste?"
                    value={x.school}
                    onChange={e => handleInputChange(e, i)}
                    maxLength="30"
                />
                </div>
                <div className="field">
                <label>Nivel de manejo</label>
                <input
                name="stars"
                    type="number"
                    placeholder="1=JR, 5=MASTER"
                    value={x.stars}
                    onChange={e => handleInputChange(e, i)}
                    min="1"
                    max="5"
                    className="number-input"
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
