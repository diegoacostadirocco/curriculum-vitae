import React from 'react';

class FormSheetStudies extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {title: '', college: '',}
    } 
    
    handleTitleChange= (e) => {
        this.setState({title: e.target.value});
        
            console.log(e.target.value);
         };
         handleCollegeChange = (e) => {
             this.setState({college: e.target.value});
             console.log(e.target.value);
            };
            
            
        render(){
        return (
        <div>
            <div className="required fields">
                <div className="field">
                    <label>Estudio</label>
                    <input type="text" 
                           placeholder="¿Que estudiaste?"
                           value={this.state.title}
                           onChange={this.handleTitleChange}
                           maxLength="20" />
                </div>
                <div className="field">
                    <label>Universidad/Instituto</label>
                    <input type="text" 
                           placeholder="¿Donde lo estudiaste?"
                           value={this.state.college}
                           onChange={this.handleCollegeChange}
                           maxLength="20" />
                </div>
                <button className="ui button">Add Estudio</button>
            </div>
        </div>
    );
    };
};

export default FormSheetStudies;