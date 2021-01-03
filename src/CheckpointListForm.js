import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import CheckpointForm from './CheckPointForm';

export default function CheckpointListForm(props) {
  const [title, setTitle] = useState('');
  const [checkpoint, setCheckpoint] = useState('');

  function submited(e) {
    e.preventDefault();
    props.onSubmit(title, checkpoint);
  }

  return (
    <div>
      <h1>Create list</h1>
      <Form className='CheckpointListForm' onSubmit={submited}>
        <Form.Control placeholder='Title' maxLength='20' value={title} onChange={e => setTitle(e.target.value)} name='title'></Form.Control>
        <CheckpointForm checkpointId='1' onChange={setCheckpoint}/>
        <Button type='submit'>Done</Button>
      </Form>
    </div>
  );
}

CheckpointListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
