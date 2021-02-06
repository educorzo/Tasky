import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckpointListForm from '../../src/edit/CheckpointListForm';
import userEvent from '@testing-library/user-event';

describe('Adding the last input', () => {
  test('adds a new input', () => {
    let onSubmit = jest.fn();
    render(<CheckpointListForm checkpoints={{ 0: '', 1: '' }} onSubmit={onSubmit} />);

    const checkpointInput = screen.getAllByPlaceholderText('Insert checkpoint');

    userEvent.type(checkpointInput[1], 'Check wood');

    expect(screen.getAllByPlaceholderText('Insert checkpoint').length).toBe(3);
  });
});