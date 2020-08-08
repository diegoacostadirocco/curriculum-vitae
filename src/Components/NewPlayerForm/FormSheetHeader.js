import React, { useState } from "react";
import { cvBorrador } from "../DataCV";

const FormSheetHeader = () => {
  const [name, setName] = useState(cvBorrador.user.name);


  const handleNameChange = e => {
    setName(e.target.value);
    cvBorrador.user.name = e.target.value;
    console.log(e.target.value);
  };
  const handleJobChange = e => {
    cvBorrador.user.job = e.target.value;
  };
  const handleSumarioChange = e => {
    cvBorrador.user.sumario = e.target.value;
  };
  return (
    <div>
      <div className="fields">
        <div className="required field">
          <label>Foto CV</label>
          <input type="file" id="userPhoto" name="foto-CV" />
        </div>
        <div className="required field">
          <label>Nombre Completo</label>
          <input
            name="name"
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={handleNameChange}
            maxLength="100"
          />
        </div>
        <div className="required field">
          <label>Trabajo</label>
          <input
            type="text"
            placeholder="¿A que te dedicas?"
            onChange={handleJobChange}
            maxLength="150"
            name="job"
          />
        </div>
      </div>
      <div className="ui form">
        <div className="required field">
          <label>Sumario Profesional</label>
          <textarea
              name="sumario"
              rows="3"
              type="text"
              placeholder="..."
              onChange={handleSumarioChange}
              style={{resize:"none"}}
            />
        </div>
      </div>
    </div>
  );
};

export default FormSheetHeader;
