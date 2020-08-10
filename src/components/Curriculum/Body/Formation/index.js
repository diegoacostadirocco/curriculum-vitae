import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WorkHistory from './WorkHistory';
import Study from './Study';
import './../../../../css/body.css';


const Formation = (props) => {
    return (
        <div className="formation">
            <Grid container spacing={5}
                  direction="column">
                <Grid item xs>
                    <Paper elevation={2}>
                        <Study cv={props.cv}/>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2}>
                        <WorkHistory cv={props.cv} />
                    </Paper>
                </Grid>
            </Grid>
        </div> 
    );
}

export default Formation;