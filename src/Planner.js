import React, { useState } from 'react';
import CheckpointList from './CheckpointList.js';
import CheckpointListForm from './CheckpointListForm.js';

export default function Planner() {
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState('');
  const [checkpoint, setCheckpoint] = useState('');
  
  function onSubmit(titleInput, checkpointInput) {
    setTitle(titleInput);
    setCheckpoint(checkpointInput);
    setDone(!done);
  }

  return (
    <div>
      {done ? (<CheckpointList title={title} checkpoint={checkpoint}/>) : (<CheckpointListForm onSubmit={onSubmit}/>)}
    </div>
  );
}
