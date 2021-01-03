import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CheckpointForm(props) {
  const [checkpoint, setCheckpoint] = useState('');

  function handleChange(event) {
    props.onChange(event.target.value, props.dataKey);
    setCheckpoint(event.target.value);
  }

  return (
    <div>
      <Form.Control placeholder={props.dataKey} maxLength='75' value={checkpoint}
        onChange={handleChange} name={props.dataKey} />
    </div>
  );
}

CheckpointForm.propTypes = {
  dataKey: PropTypes.string.isRequired,
  onChange: PropTypes.func
};