import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckpointList from '../src/CheckpointList';

test('Empty checkpoints are not shown', () => {
  let title = 'Prepare pizza',
    checkpoints = {
      0: 'Buy ingredients',
      1: 'Set oven',
      2: ''
    };

  render(<CheckpointList title={title} checkpoints={checkpoints}/>);
  let headings = screen.getAllByRole('heading');

  expect(headings.filter(x => x.textContent === '').length).toBe(0);
  expect(headings.length).toBe(3);
});