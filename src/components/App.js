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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route path="/missionlist" component={MissionList} />
        <Route path="/mission/:id" component={Mission} />
      </Switch>
    </Router>
  );
}

export default App;
