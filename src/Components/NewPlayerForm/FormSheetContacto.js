import React, { Component } from 'react';

class FormSheetContacto extends Component {

    constructor(props) {
        super(props);
        this.state = {mail: '', phone: '', linkedIn: '',}
    } 

    handleMailChange= (e) => {
        this.setState({mail: e.target.value});

        console.log(e.target.value);
     };
     handlePhoneChange = (e) => {
        this.setState({phone: e.target.value});
        console.log(e.target.value);
     };
     handleLinkedInChange = (e) => {
         this.setState ({linkedIn: e.target.value});
         console.log(e.target.value);
     }
     render() {
           return (
                <div className="required fields">
                    <div className="field">
                        <label>Mail</label>
                        <input maxLength="50"
                               type="text" name="mail"
                               placeholder="mail" value={this.state.mail}
                               onChange={this.handleMailChange} />
                    </div>
                    <div className="field">
                        <label>Numero de Contacto</label>
                        <input type="number" name="phone"
                                placeholder="numero de contacto"
                                value={this.state.phone}
                                onChange={this.handlePhoneChange}
                                maxLength="15" />
                    </div>
                    <div className="field">
                        <label>www.linkedin.com/</label>
                        <input type="text" name="linkedIn"
                            placeholder=" ESCRIBE SOLO TU PERFIL"
                            value={this.state.linkedIn}
                            onChange={this.handleLinkedInChange}
                            maxLength="40" />
                    </div>
                </div>
        );
     };

}

export default FormSheetContacto;