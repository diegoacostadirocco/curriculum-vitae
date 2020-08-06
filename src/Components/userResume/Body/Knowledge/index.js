import './../../../../css/body.css';
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { userList } from '../../../DataCV';



const Knowledge = () => {
    const listOfExpertise = userList.user.expertise.map(
        (objMapped) => 
            <Grid item xs key={`${objMapped.skill}
            _${objMapped.seminary}_${objMapped.school}
            _${objMapped.stars}`}>
                <Paper elevation={5}>
                    <div 
                        className="skill" >
                        <b>{`${objMapped.skill}`}</b>
                        <br/>
                        <span>{`${objMapped.seminary}`}</span>
                        <br/>
                        en <p>{`${objMapped.school}`}</p>
                         Nivel de manejo:   
                        <Rating name="read-only" value={objMapped.stars} readOnly />
                    </div>
                </Paper>
            </Grid>
          );
    return (
            <Grid container spacing={3} className="knowledge">
                {listOfExpertise}
            </Grid>
    );
}

export default Knowledge;