import React, {useRef, useState} from "react";
import {InputCvBorrador, TextAreaCvBorrador} from "../shared/BorradorInputs";
import {cvBorrador} from "../../DataCV";

const FormSheetHeader = () => {
    const fotoRef = useRef();
    const [fotoFile, setFotoFile] = useState(cvBorrador.user.foto);

    const handleFotoChange = () => {
        const file = fotoRef.current.files[0]
        setFotoFile(file)
        cvBorrador.user.foto = file
    }

    return (
        <div>
            <div className="fields">
                {fotoFile && <img alt="fotoCV"src={URL.createObjectURL(fotoFile)}/>}
                <div className="required field">
                    <label>Foto CV</label>
                    <input
                        accept="image/*"
                        type="file" id="userPhoto" name="foto-CV" ref={fotoRef}
                        onChange={handleFotoChange}
                    />
                </div>
                <div className="required field">
                    <label>Nombre Completo</label>
                    <InputCvBorrador
                        placeholder="Nombre completo"
                        nombreDelCampo="name"/>
                </div>
                <div className="required field">
                    <label>Trabajo</label>
                    <InputCvBorrador
                        placeholder="¿A que te dedicas?"
                        maxLength="150"
                        nombreDelCampo="job"/>

                </div>
            </div>
            <div className="ui form">
                <div className="required field">
                    <label>Sumario Profesional</label>
                    <TextAreaCvBorrador nombreDelCampo="sumario"/>
                </div>
            </div>
        </div>
    );
};

export default FormSheetHeader;
