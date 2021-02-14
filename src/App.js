import '../css/App.css';
import React from 'react';
import Planner from './Planner';
import EmptyPlanner from './EmptyPlanner';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6'>
              <Planner/>
            </div>
            <div className='col-sm-6'>
              <EmptyPlanner/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;