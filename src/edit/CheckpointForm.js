import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CheckpointForm(props) {
  const [checkpoint, setCheckpoint] = useState(props.checkpointValue);

  function onChange(e) {
    setCheckpoint(e.target.value);
    props.onChange(props.checkpointId, e.target.value);
  }

  return (
    <div className='mb-3'>
      <Form.Control placeholder='Insert checkpoint' maxLength='40'
        value={checkpoint} onChange={onChange} name={props.checkpointId}/>
    </div>
  );
}

CheckpointForm.propTypes = {
  checkpointId: PropTypes.string.isRequired,
  checkpointValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};