import '../../css/Dashboard.css';
import React from 'react';
import Planner from './Planner';
import EmptyPlanner from './EmptyPlanner';

function Dashboard() {
  return (
    <div className='Dashboard'>
      <header className='Dashboard-header'>
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

export default Dashboard;