import React from 'react';
import Grid from '@material-ui/core/Grid';
import Contacto from './Contacto';
import './../../../css/footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <Grid container spacing={2}
                  direction="column">
                <Grid item xs>
                    <Contacto cv={props.cv} />
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;