import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkpoint from '../../src/components/Checkpoint';
import userEvent from '@testing-library/user-event';

test('renders checkpoint as uncompleted', () => {
  render(<Checkpoint checkpointId='0' title='Buy yeast' />);

  const checkButton = screen.getByTitle('check');
  
  expect(checkButton.attributes['fill'].value).toBe('grey');
});

describe('Clicking check icon', () => {
  test('marks checkpoint as complete', () => {
    render(<Checkpoint checkpointId='0' title='Buy yeast' />);

    let checkButton = screen.getByTitle('check');

    userEvent.click(checkButton);

    checkButton = screen.getByTitle('check');

    expect(checkButton.attributes['fill'].value).toBe('green');
  });
});
