import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CheckpointListForm(props) {
  const [title, setTitle] = useState('');

  function submited(e) {
    e.preventDefault();
    props.onSubmit(title);
  }

  return (
    <div>
      <h1>Create list</h1>
      <Form className='CheckpointListForm' onSubmit={submited}>
        <Form.Control placeholder='Title' maxLength='20' value={title} onChange={e => setTitle(e.target.value)} name='title'></Form.Control>
        <Button type='submit'>Done</Button>
      </Form>
    </div>
  );
}

CheckpointListForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
