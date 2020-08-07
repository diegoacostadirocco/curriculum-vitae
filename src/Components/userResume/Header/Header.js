import './../../../css/encabezado.css';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { userList } from './../../DataCV';
// import image from './fotominicv.jpg';
import Summary from './Summary';

const Header = () => {
    return (
        <Grid container spacing={2} direction="row" className="encabezado">
            <Grid item xs={3}
                  className="foto-header">
                <img className="disabled ui centered image"
                     src={undefined} alt="fotoCV" />
            </Grid>
            <Grid item xs={9}>
                <Paper className="titulo">
                    <header>{userList.user.name}</header>
                    <h1>{userList.user.job}</h1>
                </Paper>
                    <Summary />
            </Grid>
        </Grid>
    );
}

export default Header;