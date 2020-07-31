import './../../css/encabezado.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { example } from './../DataCV';
import image from './fotominicv.jpg';
import Summary from './Summary';

const Header = () => {
    return (
        <Grid container spacing={2} direction="row" className="encabezado">
            <Grid item xs={3}
                  className="foto-header">
                <img className="ui centered image"
                     src={image} alt="fotoCV" />
            </Grid>
            <Grid item xs={9}>
                <Paper className="titulo">
                    <header>{example.persona.name}</header>
                    <h1>{example.persona.job}</h1>
                </Paper>
                    <Summary />
            </Grid>
        </Grid>
    );
}

export default Header;