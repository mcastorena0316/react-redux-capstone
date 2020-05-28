import React from 'react';
import './App.css';
import MissionList from '../containers/MissionList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <MissionList />
        </div>
      </header>
    </div>
  );
}

export default App;
