import React from 'react';
import ReactDOM from 'react-dom';
import './css/Styles.css';
import ExampleCV from './Components/ExampleCV';
import CreateResumeForm from './Components/CreateResumeForm';
import Nav from './Components/Nav';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Nav />
                <Switch>
                    <Route path ="/" exact component ={Home} />
                    <Route path ="/example-resume" component ={ExampleCV} />
                    <Route path ="/create-resume" component ={CreateResumeForm} />
                </Switch>
            </div>
        </Router>
       
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));