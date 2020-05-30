import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MissionList from '../containers/MissionList';
import Mission from '../containers/Mission';
import Header from './Header';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/" exact component={MissionList} />
        <Route path="/about" exact component={About} />

        <Route path="/mission/:id" component={Mission} />
      </Switch>
    </Router>
  );
}

export default App;
