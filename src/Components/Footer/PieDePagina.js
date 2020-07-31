import React from 'react';
import { GrReactjs, GrCss3 } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import './../../css/footer.css';
import Icon from './../../icons/material_ui_icon_137419 (1).ico';

const PieDePagina = () => {
    return(
        <div>
                       Este Curriculum de ejemplo se creo con las siguientes herramientas:
                        <ul className="listOfUsed">
                            <li><GrCss3 /> CSS3</li>
                            <li><GrReactjs /> ReactJS</li>
                            <li><FaReact /> React-Icons</li> 
                            <li><img src={Icon} alt="materialui-icon"/> Material-UI </li>
                        </ul>
        </div>
    )

};
export default PieDePagina;