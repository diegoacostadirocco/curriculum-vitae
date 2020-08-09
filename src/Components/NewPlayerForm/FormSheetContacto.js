import React from "react";
import { InputCvBorrador } from "../shared/BorradorInputs";


const FormSheetContacto = () => {

  return (
    <div className="required fields">
      <div className="field">
        <label>Mail</label>
        <InputCvBorrador
          nombreDelCampo="mail"
          placeholder="mail"
        />
      </div>
      <div className="field">
        <label>Numero de Contacto</label>
        <InputCvBorrador
          placeholder="numero de contacto"
          nombreDelCampo="phone"
          maxLength="15"
        />
      </div>
      <div className="field">
        <label>Linkedin</label>
        <InputCvBorrador
          nombreDelCampo="linkedIn"
          placeholder="escribe el Link completo de tu perfil"
        />
      </div>
    </div>
  );
};

export default FormSheetContacto;
