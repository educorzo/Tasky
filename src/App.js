import '../css/App.css';
import React from 'react';
import Planner from './Planner';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <Planner/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;