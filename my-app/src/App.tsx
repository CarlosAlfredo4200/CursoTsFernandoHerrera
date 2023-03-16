import React from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { User } from './components/User';


function App() {
  return (
    <div className="App">
      <h1>React + typeScript </h1>
      <hr/>
      <Counter />
      <hr />
      <User />
    </div>
  );
}

export default App;
