import React from 'react';
import PropTypes from 'prop-types';

export default function CheckpointList(props) {
  return (
    <h1>{props.title}</h1>
  );
}

CheckpointList.propTypes = {
  title: PropTypes.string.isRequired
};