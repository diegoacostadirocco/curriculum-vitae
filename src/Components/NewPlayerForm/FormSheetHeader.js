import React, { useState } from "react";

const FormSheetHeader = () => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [sumario, setSumario] = useState("");

  const handleNameChange = e => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  const handleJobChange = e => {
    setJob(e.target.value);
    console.log(e.target.value);
  };
  const handleSumarioChange = e => {
    setSumario(e.target.value);
    console.log(e.target.value);
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
            value={job}
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
              value={sumario}
              onChange={handleSumarioChange}
              style={{resize:"none"}}
            />
        </div>
      </div>
    </div>
  );
};

export default FormSheetHeader;
