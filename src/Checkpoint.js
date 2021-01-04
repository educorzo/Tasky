import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Check } from 'react-bootstrap-icons';

export default function Checkpoint(props) {
  let [marked, setMarked] = useState(false);
  let [color, setColor] = useState('grey');

  function changeStatus() {
    if (!marked) {
      setColor('green');
    } else {
      setColor('grey');
    }

    setMarked(!marked);
  }

  return (
    <div>
      <h2 key={props.checkpointId} className='d-inline'>{props.title}</h2>
      <Check color={color} size={90} title='check' className='d-inline' onClick={changeStatus}/>
    </div>
  );
}

Checkpoint.propTypes = {
  checkpointId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};