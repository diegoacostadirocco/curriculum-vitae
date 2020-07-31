import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Body from './Body/index';

const ExampleCV = () => {
    return (
        <Container className="exampleCV" maxWidth="md">
            <Grid container spacing={3}>
                <Grid item xs={12}></Grid>
                    <Header className="header" />
                </Grid>
                <br/>
                <Grid item xs={12}>
                    <Body className="body"/>
                </Grid>
                <Grid item xs={12}>
                    <Footer className="footer" />
            </Grid>
        </Container>

    );
};

export default ExampleCV;