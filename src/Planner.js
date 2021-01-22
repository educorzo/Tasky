import React, { useState } from 'react';
import CheckpointList from './CheckpointList.js';
import CheckpointListForm from './CheckpointListForm.js';

export default function Planner() {
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState('');
  const [checkpoints, setCheckpoints] = useState({});
  
  function onSubmit(titleInput, checkpointsInput) {
    setTitle(titleInput);
    setCheckpoints({ ...checkpointsInput });
    setDone(!done);
  }

  return (
    <div className='container Planner'>
      {done ? (<CheckpointList title={title} checkpoints={checkpoints}/>) : (<CheckpointListForm onSubmit={onSubmit}/>)}
    </div>
  );
}
