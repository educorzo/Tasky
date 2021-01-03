import React from 'react';
import PropTypes from 'prop-types';

export default function CheckpointList(props) {
  let checkpoints = [];
  let checkpointId;

  for (checkpointId in props.checkpoints) {
    if (Object.prototype.hasOwnProperty.call(props.checkpoints, checkpointId)) {
      checkpoints.push(<h2 key={checkpointId}>{props.checkpoints[checkpointId]}</h2>);
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