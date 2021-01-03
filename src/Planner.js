import React, { useState } from 'react';
import CheckpointList from './CheckpointList.js';
import CheckpointListForm from './CheckpointListForm.js';

export default function Planner() {
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState('');
  
  function onSubmit(titleInput) {
    setTitle(titleInput);
    setDone(!done);
  }

  return (
    <div>
      {done ? (<CheckpointList title={title} />) : (<CheckpointListForm onSubmit={onSubmit}/>)}
    </div>
  );
}
