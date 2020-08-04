import React from 'react';
import { GrReactjs, GrCss3 } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { MdRouter } from 'react-icons/md';
import Paper from '@material-ui/core/Paper';
import './../../css/home.css';
import Icon from './../../icons/material_ui_icon_137419 (1).ico';

const PieDePagina = () => {
    return(
        <div>
            <h2 className="ui dividing header">
                Esta app se creo con las siguientes herramientas:</h2>
            <div className="ui grid container listOfUsed">
                <div className="four wide column">
                    <Paper elevation={3}>
                        <li><GrCss3/> CSS3</li>
                    </Paper>
                </div>
                <div className="four wide column">
                    <Paper elevation={3}>
                        <li><GrReactjs/> ReactJS</li>
                    </Paper>
                </div>
                <div className="four wide column">
                    <Paper elevation={3}>
                        <li><FaReact/> React-Icons</li>
                    </Paper>
                </div>
                <div className="four wide column">
                    <Paper elevation={3}>
                        <li><MdRouter/> React-Router</li>
                    </Paper>
                </div>
                <div className="four wide column">
                    <Paper elevation={3}>
                        <li>S. Semantic UI</li>
                    </Paper>
                </div>
                <div className="four wide column">
                    <Paper elevation={3}>
                        <li><img src={Icon} alt="materialui-icon"/> Material-UI </li>
                    </Paper>
                </div>
            </div>   
        </div>
    );
};
export default PieDePagina;