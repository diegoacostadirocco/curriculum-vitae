import React from 'react';
import { GrReactjs, GrCss3 } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { MdRouter } from 'react-icons/md';
import './../../../css/footer.css';
import Icon from './../../../icons/material_ui_icon_137419 (1).ico';

const PieDePagina = () => {
    return(
        <div>
            <h2 className="ui dividing header">
                Esta app se creo con las siguientes herramientas:</h2>
            <ul className="listOfUsed">
                <li><GrCss3/> CSS3</li>
                <li><GrReactjs/> ReactJS</li>
                <li><FaReact/> React-Icons</li> 
                <li><MdRouter/> React-Router</li>
                <li>S. Semantic UI</li>
                <li><img src={Icon} alt="materialui-icon"/> Material-UI </li>
            </ul>
        </div>
    )

};
export default PieDePagina;