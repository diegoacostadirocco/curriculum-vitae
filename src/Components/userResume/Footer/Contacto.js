import React from 'react';
import {FiMail} from 'react-icons/fi';
import {FcCallback} from 'react-icons/fc';
import {FaLinkedin} from 'react-icons/fa';
import {userList} from '../../DataCV';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './../../../css/footer.css';
import PropTypes from 'prop-types';

const Contacto = () => {

    return (
        <div className="contacto">
            <Grid container spacing={1} direction="row">
                <Grid item xs>
                    <Paper elevation={2} className="linksDeContacto">
                        <a href={`mailto: ${userList.user.mail}`}>
                            <FiMail/>{userList.user.mail}
                        </a>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2} className="linksDeContacto">
                        <a href={`tel:${userList.user.phone}`}>
                            <FcCallback/>{userList.user.phone}
                        </a>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper elevation={2} className="linksDeContacto">
                        <a href="https://www.linkedin.com/in/adrdiegomartin/"
                           target="_blank"
                           rel="noopener noreferrer">
                            <FaLinkedin/>{userList.user.linkedIn}
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
