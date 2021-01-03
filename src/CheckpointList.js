import React from 'react';
import PropTypes from 'prop-types';

export default function CheckpointList(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.checkpoint}</h2>
    </div>
  );
}

CheckpointList.propTypes = {
  title: PropTypes.string.isRequired,
  checkpoint: PropTypes.string.isRequired
};