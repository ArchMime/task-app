import React from 'react';
import './App.css';
import './assets/styles.css'
import CreateTask from './components/CreateTask'

function App() {
  return (
    <div className="App">
      <div className="outer-box">
      <CreateTask/>
      </div>
    </div>
  );
}

export default App;
