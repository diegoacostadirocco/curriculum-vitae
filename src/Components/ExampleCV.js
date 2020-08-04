import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from './ejemplo/Footer/Footer';
import Header from './ejemplo/Header/Header';
import Body from './ejemplo/Body/index';

const ExampleCV = () => {
    return (
        <div className="ui container">

         <Container className="exampleCV" maxWidth="md"> 
            <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
                    <Header className="header" />
                </Grid>
                <br/>
                <br/>
                <Grid item xs={12}>
                    <Body className="body"/>
                </Grid>
                <Grid item xs={12}>
                    <Footer className="footer" />
            </Grid>
         </Container>
         </div>

    );
};

export default ExampleCV;