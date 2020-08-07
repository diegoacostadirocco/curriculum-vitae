import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FcCallback } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import { example } from '../../DataCV';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './../../../css/footer.css';
import PropTypes from 'prop-types';

const Contacto = () => {

    return (
        <div className="contacto">
            <span></span>
            <Grid container spacing={2}
                    direction="row">
                <Grid item xs>
                    <Paper elevation={2} className="linksDeContacto">
                        <a href={`mailto: ${example.persona.mail}`} style={{wordWrap:"break-word"}}>
                            <FiMail />{example.persona.mail}
                        </a>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2} className="linksDeContacto">
                        <a href={`tel:${example.persona.phone}`}>
                            <FcCallback />{example.persona.phone}
                        </a>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2} className="linksDeContacto">
                        <a href="https://www.linkedin.com/in/adrdiegomartin/"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin />{example.persona.linkedIn}
                        </a>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

Contacto.propTypes = {
    reachMeAt: PropTypes.shape({
        mail: PropTypes.string.isRequired,
        phone: PropTypes.number.isRequired,
        linkedIn: PropTypes.string,
    })
}
export default Contacto;
