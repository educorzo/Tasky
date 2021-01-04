import React from 'react';
import PropTypes from 'prop-types';

export default function Checkpoint(props) {
  return (
    <div>
      <h2 key={props.checkpointId}>{props.title}</h2>
      <svg className='bi bi-alert-triangle text-success' width='32' height='32'
        viewBox='0 0 20 20' fill='currentColor' xmlns='http://www.w3.org/2000/svg' />
    </div>
  );
}

Checkpoint.propTypes = {
  checkpointId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};