import React from 'react';
import { GrReactjs, GrCss3 } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { MdRouter } from 'react-icons/md';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import './../../css/home.css';
import Icon from './../../icons/material_ui_icon_137419 (1).ico';

const PieDePagina = () => {
    return(
        <div>
            <h2 className="ui dividing header">
                Esta app se creo con las siguientes herramientas:</h2>
            <Grid container spacing={2} className="listOfUsed">
                <Grid item xs>
                    <Paper elevation={2}>
                        <GrCss3 color="primary"/><span>CSS3</span>
                    </Paper>
                </Grid>
                <br/>
                <Grid item xs>
                    <Paper elevation={2}>
                        <GrReactjs/><span>ReactJS</span> 
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2}>
                        <FaReact/><span>React icons</span> 
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2} className="listOfUsed">
                <Grid item xs>
                    <Paper elevation={2}>
                        <MdRouter/><span>React Router</span> 
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2}>
                        <span>S. Semantic UI</span>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2}>
                        <img src={Icon} alt="materialui-icon"/><span> Material UI</span> 
                    </Paper>
                </Grid>  
            </Grid>
        </div>
    );
};
export default PieDePagina;