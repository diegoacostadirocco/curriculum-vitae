import React, { useState } from "react";

const FormSheetStudies = () => {
  const [title, setTitle] = useState("");
  const [college, setCollege] = useState("");

  const handleTitleChange = e => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleCollegeChange = e => {
    setCollege(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="required fields">
        <div className="field">
          <label>Estudio</label>
          <input
            type="text"
            placeholder="¿Que estudiaste?"
            value={title}
            onChange={handleTitleChange}
            maxLength="20"
          />
        </div>
        <div className="field">
          <label>Universidad/Instituto</label>
          <input
            type="text"
            placeholder="¿Donde lo estudiaste?"
            value={college}
            onChange={handleCollegeChange}
            maxLength="20"
          />
        </div>
        <button className="ui button">Agregar otro Estudio</button>
      </div>
    </div>
  );
};
export default FormSheetStudies;
