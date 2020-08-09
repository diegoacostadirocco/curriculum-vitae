import React from 'react';
import {FiMail} from 'react-icons/fi';
import {FcCallback} from 'react-icons/fc';
import {FaLinkedin} from 'react-icons/fa';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './../../../css/footer.css';
import PropTypes from 'prop-types';

const Contacto = (props) => {

    return (
        <div className="contacto">
            <Grid container spacing={1} direction="row">
                <Grid item xs>
                    <Paper elevation={2} className="linksDeContacto">
                        <a href={`mailto: ${props.cv.mail}`}>
                            <FiMail/>{props.cv.mail}
                        </a>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2} className="linksDeContacto">
                        <a href={`tel:${props.cv.phone}`}>
                            <FcCallback/>{props.cv.phone}
                        </a>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2} className="linksDeContacto">
                        <a href="https://www.linkedin.com/in/adrdiegomartin/"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin/>{props.cv.linkedIn}
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
