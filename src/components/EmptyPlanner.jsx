import React from 'react';
import { FileEarmarkPlus } from 'react-bootstrap-icons';

export default function EmptyPlanner() {
  return (
    <div className='container EmptyPlanner h-100'>
      <FileEarmarkPlus className= 'my-auto' size={120} color='white'/>
    </div>
  );
}