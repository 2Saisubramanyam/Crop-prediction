import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages'
import About from './pages'
import Prediction from './pages'

function App() {
  return (
    <Router>
      <Navbar>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/pred' component={Prediction}/>
        </Switch>
      </Navbar>
    </Router>
  );
}


export default App