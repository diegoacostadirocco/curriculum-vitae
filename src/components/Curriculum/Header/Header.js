import './../../../css/encabezado.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Summary from './Summary';

const Header = (props) => {
    console.log(props.foto);

    return (
        <Grid container spacing={2} direction="column" className="encabezado">
            <Grid item xs={12}
                  className="foto-header">
                {props.cv.foto && <img className="ui big centered image" style={{width:"auto", align:"center",borderRadius:"10px"}}
                      src={URL.createObjectURL(props.cv.foto)} alt="fotoCV" />}
            </Grid>
            <Grid item xs={12}>
                <Paper className="titulo">
                    <header>{props.cv.name}</header>
                    <h1>{props.cv.job}</h1>
                </Paper>
                    <Summary cv={props.cv}/>
            </Grid>
        </Grid>
    );
}

export default Header;