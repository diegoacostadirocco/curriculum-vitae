import React from 'react';

class FormSheetSkills extends React.Component {
    constructor(props){
        super(props);
        this.state ={aptitud:'', seminary:'', stars:''}
    }
    handleAptitudChange = (e) =>{
        this.setState({aptitud: e.target.value});
        console.log(e.target.value);
    }
    handleSeminaryChange = (e) =>{
        this.setState({seminary: e.target.value});
        console.log(e.target.value);
    }
    handleStarsChange = (e) =>{
        this.setState({stars: e.target.value});
        console.log(e.target.value);
    }

    render(){
        return (
            <div>
                <div className="fields">
                    <div className="field">
                        <label>Aptitudes</label>
                        <input type="text"
                            placeholder="¿Que otra aptitud posees?"
                            value={this.state.aptitud}
                            onChange={this.handleAptitudChange}
                            maxLength="20" />
                    </div>
                    <div className="field">
                        <label>Seminario</label>
                        <input type="text" 
                            placeholder="¿Donde la aprendiste?"
                            value={this.state.seminary}
                            onChange={this.handleSeminaryChange}
                            maxLength="30" />
                    </div>
                    <div className="field">
                        <label>Nivel de manejo</label>
                        <input type="number" 
                            placeholder="1=JR, 5=MASTER"
                            value={this.state.stars}
                            onChange={this.handleStarsChange}
                            maxLength="1" />
                    </div>
                    <button className="ui button">agregar skill</button>
                </div>
            </div>
        );
    }
};

export default FormSheetSkills;