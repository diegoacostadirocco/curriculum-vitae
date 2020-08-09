import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './css/Styles.css';
import CurriculumBase from './components/Curriculum/CurriculumBase';
import CreateResumeForm from './CreateResumeForm';
import Nav from './components/shared/Nav';
import Home from './components/inicio/Home';
import { example, cvFinal } from './DataCV';

const App = () => {

    return (
        <Router>
            <div className="app">
                 <Nav />
                <Switch>
                 <Route path ="/" exact component= {Home} />
                 <Route path ="/create-resume" component= {CreateResumeForm} /> 
                 <Route path ="/example-resume"  render= {() =><CurriculumBase cv={example.persona} />} />
                 <Route path ="/user-resume" render= {() =><CurriculumBase cv={cvFinal.user} />} /> 
                </Switch>
            </div>
        </Router>      
    );
} 

ReactDOM.render(<App />, document.querySelector('#root'));