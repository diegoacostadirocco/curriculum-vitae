import React from 'react';

class FormSheetJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {workPost: '', company: '', lastDate:'',}
    } 

    handleWorkPostChange= (e) => {
        this.setState({workPost: e.target.value});

        console.log(e.target.value);
     };
     handleCompanyChange = (e) => {
        this.setState({company: e.target.value});
        console.log(e.target.value);
     };
     handleLastDateChange = (e) => {
        this.setState({lastDate: e.target.value});
        console.log(e.target.value);
     };
     render(){
        return (
            <div>
                <div className="fields"> 
                    <div className="field">
                        <label>Tu ultimo trabajo</label>
                        <input type="text" 
                               placeholder="¿De que trabajas/abas?"
                               value={this.state.workPost}
                               onChange={this.handleWorkPostChange}
                               maxLength="30" />
                    </div>
                    <div className="field">
                        <label>Empresa</label>
                        <input type="text"
                               placeholder="¿Donde?"
                               value={this.state.company}
                               onChange={this.handleCompanyChange}
                               maxLength="30"/>
                    </div>
                    <div className="field">
                        <label>Fecha de finalizacion</label>
                        <input type="number"
                               placeholder="¿Hasta cuando?"
                               value={this.state.lastDate}
                               onChange={this.handleLastDateChange}
                               />
                    </div>
                    <button className="ui button">Agregar Trabajo</button>
                </div>
            </div>
        );
    };
};

export default FormSheetJobs;