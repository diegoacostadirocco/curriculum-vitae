import React from 'react';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Body from './Body/index';
import DownBar from '../shared/DownBar';


const CurriculumBase = ({cv}) => {
    return (
        <div>
            <div className="ui container new-resume-form">
                <Grid container spacing={3}>
                    <Grid item xs={12}></Grid>
                        <Header cv={cv} />
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item xs={12}>
                         <Body cv={cv} />
                    </Grid>
                    <Grid item xs={12}>
                        <Footer cv={cv}/>
                </Grid>
            </div>
            <DownBar />
         </div>
    );
};

export default CurriculumBase;