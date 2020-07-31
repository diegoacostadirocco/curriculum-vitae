import './../../../css/knowledge.css';
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { example } from '../../DataCV';



const Knowledge = () => {
    const listOfExpertise = example.persona.expertise.map(
        (objMapped) => 
            <Grid item xs>
                <Paper elevation={5}>
                    <div 
                        key={`${objMapped.skill}
                            _${objMapped.seminary}_${objMapped.school}
                            _${objMapped.stars}`}
                        className="skill" >
                        <b>{`${objMapped.skill}`}</b>
                        <br/>
                        <span>{`${objMapped.seminary}`}</span>
                        <br/>
                        AT <p>{`${objMapped.school}`}</p>
                         RATE:   
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