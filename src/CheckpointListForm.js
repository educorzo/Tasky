import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CheckpointForm from './CheckpointForm.js';

export function createCheckpointForms(checkpoints, onChange) {
  let checkpointId,
    checkpointforms = [];

  for (checkpointId in checkpoints) {
    if (Object.prototype.hasOwnProperty.call(checkpoints, checkpointId)) {
      checkpointforms.push(<CheckpointForm key={checkpointId} checkpointId={checkpointId} onChange={onChange} />);
    }
  }

  if (checkpoints[checkpointId] !== '') {
    checkpointforms.push(<CheckpointForm key={checkpointId + 1} checkpointId={checkpointId + 1} onChange={onChange} />);
  }

  return checkpointforms;
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

  let checkpointForms = createCheckpointForms(checkpoints, onChange);

  return (
    <div>
      <h1>Create list</h1>
      <Form className='CheckpointListForm' onSubmit={submited}>
        <div className='mb-3'>
          <Form.Control size='lg' placeholder='Title' maxLength='20' value={title}
            onChange={e => setTitle(e.target.value)} name='title'></Form.Control>
        </div>
        {checkpointForms}
        <Button className='mb-3' type='submit'>Done</Button>
      </Form>
    </div>
  );
}

CheckpointListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
