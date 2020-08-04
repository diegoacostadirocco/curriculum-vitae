import React, { useState } from "react";
import "../../css/newResumeForm.css";

const FormSheetSkills = () => {
  const [skill, setSkill] = useState("");
  const [seminary, setSeminary] = useState("");
  const [school, setSchool] = useState("");
  const [stars, setStars] = useState("");

  const handleSkillChange = e => {
    setSkill(e.target.value);
    console.log(e.target.value);
  };
  const handleSeminaryChange = e => {
    setSeminary(e.target.value);
    console.log(e.target.value);
  };
  const handleSchoolChange = e => {
    setSchool(e.target.value);
    console.log(e.target.value);
  };
  const handleStarsChange = e => {
    setStars(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="fields">
        <div className="field">
          <label>Aptitudes</label>
          <input
            type="text"
            placeholder="¿Que otra aptitud posees?"
            value={skill}
            onChange={handleSkillChange}
            maxLength="20"
          />
        </div>
        <div className="field">
          <label>Seminario</label>
          <input
            type="text"
            placeholder="Nombre del curso"
            value={seminary}
            onChange={handleSeminaryChange}
            maxLength="30"
          />
        </div>
        <div className="field">
          <label>Portal</label>
          <input
            type="text"
            placeholder="¿Donde la aprendiste?"
            value={school}
            onChange={handleSchoolChange}
            maxLength="30"
          />
        </div>
        <div className="field">
          <label>Nivel de manejo</label>
          <input
            type="number"
            placeholder="1=JR, 5=MASTER"
            value={stars}
            onChange={handleStarsChange}
            min="1"
            max="5"
            className="number-input"
          />
        </div>
        <button className="ui button">agregar otra skill</button>
      </div>
    </div>
  );
};

export default FormSheetSkills;
