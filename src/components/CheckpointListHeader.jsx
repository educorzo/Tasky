import React from 'react';
import PropTypes from 'prop-types';
import { Pencil } from 'react-bootstrap-icons';

export default function CheckpointListHeader(props) {
  return (
    <div className='CheckpointListHeader row border-bottom'>
      <h1 className='col-sm'><b>{props.title}</b></h1>
      <Pencil className='col-sm-2 float-right' size={30} color='grey' title='edit' onClick={props.edit}/>
    </div>
  );
}

CheckpointListHeader.propTypes = {
  edit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};