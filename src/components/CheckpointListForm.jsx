import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CheckpointForm from './CheckpointInput';

export function createCheckpointInputs(checkpoints, onChange) {
  let checkpointId,
    checkpointInputs = [];

  for (checkpointId in checkpoints) {
    if (Object.prototype.hasOwnProperty.call(checkpoints, checkpointId)) {
      checkpointInputs.push(<CheckpointForm key= {checkpointId}
        checkpointId={checkpointId} checkpointValue={checkpoints[checkpointId]} onChange={onChange}/>);
    }
  }

  if (checkpoints[checkpointId] !== '') {
    checkpointInputs.push(<CheckpointForm key= {checkpointId + 1}
      checkpointId={checkpointId + 1} checkpointValue={''} onChange={onChange}/>);
  }

  return checkpointInputs;
}

export default function CheckpointListForm(props) {
  const [title, setTitle] = useState(props.title);
  const [checkpoints, setCheckpoints] = useState(props.checkpoints);

  function submited(e) {
    e.preventDefault();
    props.onSubmit(title, checkpoints);
  }

  function onChange(id, editedCheckpoint) {
    let newCheckpoints = { ...checkpoints };

    newCheckpoints[id] = editedCheckpoint;

    setCheckpoints(newCheckpoints);
  }

  let checkpointInputs = createCheckpointInputs(checkpoints, onChange);

  return (
    <div>
      <h1>Create list</h1>
      <Form className='CheckpointListForm' onSubmit={submited}>
        <div className='mb-3'>
          <Form.Control placeholder='Title' maxLength='20' value={title} onChange={e => setTitle(e.target.value)} name='title'></Form.Control>
        </div>
        {checkpointInputs}
        <Button className='mb-3' type='submit'>Done</Button>
      </Form>
    </div>
  );
}

CheckpointListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
  checkpoints: PropTypes.object.isRequired
};
