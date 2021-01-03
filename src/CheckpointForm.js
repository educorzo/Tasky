import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CheckpointForm(props) {
  const [checkpoint, setCheckpoint] = useState('');

  function onChange(e) {
    setCheckpoint(e.target.value);
    props.onChange(e.target.value);
  }

  return (
    <Form.Control placeholder='Insert checkpoint' maxLength='40'
      value={checkpoint} onChange={onChange} name={props.checkpointId}/>
  );
}

CheckpointForm.propTypes = {
  checkpointId: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};