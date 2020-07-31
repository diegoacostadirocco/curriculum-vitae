import React from 'react';

class FormSheetHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: '', job: '',}
    } 

    handleNameChange= (e) => {
        this.setState({name: e.target.value});

        console.log(e.target.value);
     };
     handleJobChange = (e) => {
        this.setState({job: e.target.value});
        console.log(e.target.value);
     };
    render(){
        return (
            <div>
                <div className="fields">
                    <div className="required field">
                        <label>Nombre Completo</label>
                        <input type="text" 
                               placeholder="Nombre completo"
                               value={this.state.name}
                               onChange={this.handleNameChange}
                               maxLength="100" />
                    </div>
                    <div className="required field">
                        <label>Trabajo</label>
                        <input type="text"
                               placeholder="¿A que te dedicas?"
                               value={this.state.job}
                               onChange={this.handleJobChange}
                               maxLength="150" />
                    </div>
                </div>
                 <div className="ui form">
                    <div className="required field">
                        <label>Sumario Profesional</label>
                        <textarea rows="3" ></textarea>
                    </div>
                </div> 
            </div>
        );
    };
};

export default FormSheetHeader;