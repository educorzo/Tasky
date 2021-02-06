import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckpointList from '../src/CheckpointList';

test('Empty checkpoints are not shown', () => {
  let checkpointList = {
    0: 'Buy ingredients',
    1: 'Set oven',
    2: ''
  };

  render(<CheckpointList checkpoints={checkpointList}/>);
  let checkpoints = screen.getAllByRole('heading');

  expect(checkpoints.filter(x => x.textContent === '').length).toBe(0);
  expect(checkpoints.length).toBe(2);
});