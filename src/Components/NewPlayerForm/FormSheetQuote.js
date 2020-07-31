import React, { Component } from 'react';

class FormSheetQuote extends Component {
    
    constructor(props) {
        super(props);
        this.state = {quote: '',}
    } 

    handleQuoteChange= (e) => {
        this.setState({quote: e.target.value});

        console.log(e.target.value);
     };
    render() {
        return (
            <div className="field">
                <label>Cuentanos sobre ti</label>
                <textarea rows="3"
                          type="text" 
                          placeholder="..."
                          value={this.state.quote}
                          onChange={this.handleQuoteChange}></textarea>        
            </div>
        );
    }
}

export default FormSheetQuote;