import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Knowledge from './Knowledge/index';
import Formation from './Formation/index';



const Body = () => {
    return (
        <div id="body">
            <Grid container spacing={2}
                  direction="column">
                <Grid item xs>
                    <Paper elevation={2}>
                        <Knowledge  />
                    </Paper>
                </Grid>
                <br/>
                <Grid item xs>
                    <Paper elevation={2}>
                        <Formation />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Body;