import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckpointListForm from '../src/CheckpointListForm';
import userEvent from '@testing-library/user-event';

describe('Adding the last input', () => {
  test('adds a new input', () => {
    let onSubmit = jest.fn();
    render(<CheckpointListForm onSubmit={onSubmit} />);

    const checkpointInput = screen.getAllByPlaceholderText('Insert checkpoint');

    userEvent.type(checkpointInput[1], 'Check wood');

    expect(screen.getAllByPlaceholderText('Insert checkpoint').length).toBe(3);
  });
});