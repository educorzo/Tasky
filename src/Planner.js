import React, { useState } from 'react';
import CheckpointList from './CheckpointList.js';
import CheckpointListForm from './edit/CheckpointListForm.js';
import CheckpointListHeader from './CheckpointListHeader.js';

export default function Planner() {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [checkpoints, setCheckpoints] = useState({ 0: '', 1: '' });

  function onSubmit(titleInput, checkpointsInput) {
    setTitle(titleInput);
    setCheckpoints({ ...checkpointsInput });
    setEditMode(!editMode);
  }

  function onEditList() {
    setEditMode(!editMode);
  }

  return (
    <div className='container Planner'>
      {editMode ? (
        <div>
          <CheckpointListHeader title={title} edit={onEditList} />
          <CheckpointList checkpoints={checkpoints} />
        </div>
      ) : (<CheckpointListForm onSubmit={onSubmit} title={title} checkpoints={checkpoints} />)}
    </div>
  );
}
