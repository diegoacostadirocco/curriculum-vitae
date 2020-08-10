import React from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Body from './Body/index';
import DownBar from '../shared/DownBar';

const CurriculumBase = (props) => {
    return (
        <div>
            <div className="ui container new-resume-form">
                <Grid container spacing={3}>
                    <Grid item xs={12}></Grid>
                        <Header cv={props.cv} foto={props.cv.foto}/>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item xs={12}>
                         <Body cv={props.cv} />
                    </Grid>
                    <Grid item xs={12}>
                        <Footer cv={props.cv}/>
                </Grid>
            </div>
            <DownBar />
         </div>
    );
};

export default CurriculumBase;