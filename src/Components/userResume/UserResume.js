import React from 'react';
// import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer/Footer'
import Header from './Header/Header';
import Body from './Body/index';


const ExampleCV = () => {
    
    return (
        <div className="ui container new-resume-form">
         {/* <Container className="exampleCV" maxWidth="md">  */}
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
         {/* </Container> */}
         </div>
    );
};

export default ExampleCV;