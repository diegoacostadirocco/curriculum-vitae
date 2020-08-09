import React, {useState} from "react";
import {cvBorrador} from "../../DataCV";
import _ from "lodash";

export const InputCvBorrador = (props) => {
    const {nombreDelCampo, ...rest} = props;

    const valorInicial = _.get(cvBorrador.user, nombreDelCampo);

    const [campo, setCampo] = useState(valorInicial);

    const handleCampoChange = e => {
        setCampo(e.target.value);
        _.set(cvBorrador.user, nombreDelCampo, e.target.value)
        console.log(e.target.value);
    };

    return <input
        type="text"
        value={campo}
        onChange={handleCampoChange}
        maxLength="100"
        {...rest}
    />
}

export const TextAreaCvBorrador = (props) => {
    const {nombreDelCampo, ...rest} = props;

    const [campo, setCampo] = useState(cvBorrador.user[nombreDelCampo]);

    const handleCampoChange = e => {
        setCampo(e.target.value);
        cvBorrador.user[nombreDelCampo] = e.target.value;
        console.log(e.target.value);
    };

    return <textarea
        value={campo}
        onChange={handleCampoChange}
        name="sumario"
        rows="3"
        placeholder="..."
        style={{resize: "none"}}
        {...rest}
    />
}

export const InputNumericoCvBorrador = (props) => {
    const {nombreDelCampo, ...rest} = props;

    const [campo, setCampo] = useState(cvBorrador.user[nombreDelCampo]);

    const handleCampoChange = e => {
        setCampo(e.target.value);
        cvBorrador.user[nombreDelCampo] = e.target.value;
        console.log(e.target.value);
    };

    return <input
    type="number"
    value={campo}
    onChange={handleCampoChange}
    maxLength="1"
    {...rest}
    />
}