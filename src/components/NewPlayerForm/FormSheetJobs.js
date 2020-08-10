import React, {useState} from "react";
import {BsTrash} from 'react-icons/bs';
import {InputCvBorrador} from "../shared/BorradorInputs";
import {cvBorrador} from "../../DataCV";

const FormSheetJobs = () => {
    const [trabajos, setTrabajos] = useState(cvBorrador.user.trabajos);

    const handleRemoveClick = index => {
        const work = [...trabajos];
        work.splice(index, 1);
        cvBorrador.user.trabajos = work
        setTrabajos(work);
    };
    const handleAddClick = () => {
        const nuevosTrabajos = [...trabajos, {workPost: "", company: "", lastDate: ""}]
        cvBorrador.user.trabajos = nuevosTrabajos
        setTrabajos(nuevosTrabajos);
    };
    return (
        <div>
            {trabajos.map((trabajo, i) => {
                return (
                    <div key={`${trabajo} ${i}`} className="fields">
                        <div className="field">
                            <label>Tu ultimo trabajo</label>
                            <InputCvBorrador
                                nombreDelCampo={`trabajos[${i}].workPost`}
                                placeholder="¿De que trabajas/abas?"
                                maxLength="30"
                            />
                        </div>
                        <div className="field">
                            <label>Empresa</label>
                            <InputCvBorrador
                                nombreDelCampo={`trabajos[${i}].company`}
                                placeholder="¿Donde?"
                                maxLength="30"
                            />
                        </div>
                        <div className="field">
                            <label>Fecha de finalizacion</label>
                            <InputCvBorrador
                                nombreDelCampo={`trabajos[${i}].endDate`}
                                placeholder="MM-YYYY"
                            />
                        </div>
                        <div style={{textAlign: "center"}}>
                            {trabajos.length !== 1 && (
                                <button className="ui button" onClick={() => handleRemoveClick(i)}>
                                    <BsTrash/>
                                </button>
                            )}
                            {trabajos.length - 1 === i && (
                                <button style={{margin: "5px"}} className="ui button" onClick={handleAddClick}>
                                    Agregar Trabajo
                                </button>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>)
}
export default FormSheetJobs;