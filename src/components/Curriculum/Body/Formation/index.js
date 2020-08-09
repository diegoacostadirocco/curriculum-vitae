import React from 'react';
import Grid from '@material-ui/core/Grid';
import WorkHistory from './WorkHistory';
import Study from './Study';
import './../../../../css/body.css';


const Formation = (props) => {
    return (
        <div className="formation">
            <Grid container spacing={5}
                  direction="row">
                <Grid item xs>
                    <Study cv={props.cv}/>
                </Grid>
                <Grid item xs>
                    <WorkHistory cv={props.cv} />
                </Grid>
            </Grid>
        </div> 
    );
}

export default Formation;