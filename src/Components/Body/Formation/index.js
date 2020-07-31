import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkHistory from './WorkHistory';
import Study from './Study';
import './../../../css/formation.css';


const Formation = () => {
    return (
        <div className="formation">
            <Grid container spacing={5}
                  direction="column">
                <Grid item xs>
                    <Study />
                </Grid>
                <Grid item xs>
                    <WorkHistory />
                </Grid>
            </Grid>
        </div> 
    );
}

export default Formation;