import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CheckpointForm from './CheckpointForm.js';

export function createInputs(checkpoints, onChange) {
  let checkpointId,
    forms = [];

  for (checkpointId in checkpoints) {
    if (Object.prototype.hasOwnProperty.call(checkpoints, checkpointId)) {
      forms.push(<CheckpointForm key= {checkpointId} checkpointId={checkpointId} onChange={onChange}/>);
    }
  }
  
  if (checkpoints[checkpointId] !== '') {
    forms.push(<CheckpointForm key= {checkpointId + 1} checkpointId={checkpointId + 1} onChange={onChange}/>);
  }

  return forms;
}

export default function CheckpointListForm(props) {
  const [title, setTitle] = useState('');
  const [checkpoints, setCheckpoints] = useState({ 0: '', 1: '' });

  function submited(e) {
    e.preventDefault();
    props.onSubmit(title, checkpoints);
  }

  function onChange(id, editedCheckpoint) {
    let newCheckpoints = { ...checkpoints };

    newCheckpoints[id] = editedCheckpoint;
    
    setCheckpoints(newCheckpoints);
  }

  let checkpointForms = createInputs(checkpoints, onChange);

  return (
    <div>
      <h1>Create list</h1>
      <Form className='CheckpointListForm' onSubmit={submited}>
        <Form.Control placeholder='Title' maxLength='20' value={title} onChange={e => setTitle(e.target.value)} name='title'></Form.Control>
        {checkpointForms}
        <Button type='submit'>Done</Button>
      </Form>
    </div>
  );
}

CheckpointListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
