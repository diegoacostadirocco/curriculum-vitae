import React, { useState } from "react";

const FormSheetJobs = () => {
  const [workPost, setWorkPost] = useState("");
  const [company, setCompany] = useState("");
  const [lastDate, setLastDate] = useState("");

  const handleWorkPostChange = e => {
    setWorkPost(e.target.value);
    console.log(e.target.value);
  };
  const handleCompanyChange = e => {
    setCompany(e.target.value);
    console.log(e.target.value);
  };
  const handleLastDateChange = e => {
    setLastDate(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="fields">
        <div className="field">
          <label>Tu ultimo trabajo</label>
          <input
            type="text"
            placeholder="¿De que trabajas/abas?"
            value={workPost}
            onChange={handleWorkPostChange}
            maxLength="30"
          />
        </div>
        <div className="field">
          <label>Empresa</label>
          <input
            type="text"
            placeholder="¿Donde?"
            value={company}
            onChange={handleCompanyChange}
            maxLength="30"
          />
        </div>
        <div className="field">
          <label>Fecha de finalizacion</label>
          <input
            type="number"
            placeholder="¿Hasta cuando?"
            value={lastDate}
            onChange={handleLastDateChange}
            className="number-input"
          />
        </div>
        <button className="ui button">Agregar otro Trabajo</button>
      </div>
    </div>
  );
};

export default FormSheetJobs;
