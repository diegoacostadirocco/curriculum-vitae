import React from 'react';
import Grid from '@material-ui/core/Grid';
import Contacto from './Contacto';
import './../../../css/footer.css';
// import PieDePagina from './PieDePagina';

const Footer = () => {
    return (
        <div className="footer">
            <Grid container spacing={2}
                  direction="column">
                <Grid item xs>
                    <Contacto />
                </Grid>
                {/* <Grid item xs className="pieDePagina">
                    <PieDePagina />
                </Grid> */}
            </Grid>
        </div>
    );
}

export default Footer;