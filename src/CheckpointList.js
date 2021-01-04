import React from 'react';
import PropTypes from 'prop-types';
import Checkpoint from './Checkpoint.js';

export default function CheckpointList(props) {
  let checkpoints = [];
  let checkpointId;

  for (checkpointId in props.checkpoints) {
    if (Object.prototype.hasOwnProperty.call(props.checkpoints, checkpointId)) {
      checkpoints.push(<Checkpoint key={checkpointId} checkpointId={checkpointId} title={props.checkpoints[checkpointId]} />);
    }
  }

  return (
    <div>
      <h1>{props.title}</h1>
      {checkpoints}
    </div>
  );
}

CheckpointList.propTypes = {
  title: PropTypes.string.isRequired,
  checkpoints: PropTypes.object.isRequired
};