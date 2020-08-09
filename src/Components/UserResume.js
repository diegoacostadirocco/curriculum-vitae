import React from 'react';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from './userResume/Footer/Footer'
import Header from './userResume/Header/Header';
import Body from './userResume/Body/index';
import DownBar from './shared/DownBar';


const ExampleCV = () => {
    
    return (
    <div>
        <div className="ui container new-resume-form">
            <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
                    <Header />
                </Grid>
                <br/>
                <br/>
                <Grid item xs={12}>
                    <Body/>
                </Grid>
                <Grid item xs={12}>
                    <Footer />
            </Grid>
        </div>
        <DownBar />
    </div>
    );
};

export default ExampleCV;