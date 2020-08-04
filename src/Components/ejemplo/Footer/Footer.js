import React from 'react';
import Grid from '@material-ui/core/Grid';
import Contacto from './Contacto';
import './../../../css/footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <Grid container spacing={2}
                  direction="column">
                <Grid item xs>
                    <Contacto />
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;