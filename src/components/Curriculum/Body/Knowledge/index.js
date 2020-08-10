import './../../../../css/body.css';
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const Knowledge = (props) => {
    const listOfExpertise = props.cv.expertise.map(
        (expertee) => 
            <Grid item xs key={`${expertee.skill}
            _${expertee.seminary}_${expertee.school}
            _${expertee.stars}`}>
                <Paper elevation={5}>
                    <div 
                        className="skill" >
                        <b>{`${expertee.skill}`}</b>
                        <br/>
                        <span>{`${expertee.seminary}`}</span>
                        <br/>
                        en <p>{`${expertee.school}`}</p>
                         Nivel de manejo:   
                        <Rating name="read-only" value={expertee.stars} readOnly />
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