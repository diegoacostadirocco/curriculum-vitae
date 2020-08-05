import React, { useState } from "react";

const FormSheetContacto = () => {
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  const handleMailChange = e => {
    setMail(e.target.value);
    console.log(e.target.value);
  };
  const handlePhoneChange = e => {
    setPhone(e.target.value);
    console.log(e.target.value);
  };
  const handleLinkedInChange = e => {
    setLinkedIn(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="required fields">
      <div className="field">
        <label>Mail</label>
        <input
          maxLength="50"
          type="text"
          name="mail"
          placeholder="mail"
          value={mail}
          onChange={handleMailChange}
        />
      </div>
      <div className="field">
        <label>Numero de Contacto</label>
        <input
          type="number"
          name="phone"
          placeholder="numero de contacto"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
        />
      </div>
      <div className="field">
        <label>Linkedin</label>
        <input
          type="text"
          name="linkedIn"
          placeholder="escribe el Link completo de tu perfil"
          value={linkedIn}
          onChange={handleLinkedInChange}
          maxLength="40"
        />
      </div>
    </div>
  );
};

export default FormSheetContacto;
