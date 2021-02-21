import React from 'react';
import { render, screen } from '@testing-library/react';
import Planner from '../../src/components/Planner';
import userEvent from '@testing-library/user-event';

describe('When edit button is clicked', () => {
  test('values appear in form', () => {
    render(<Planner />);

    const titleInput = screen.getByPlaceholderText('Title');
    const checkpointInput = screen.getAllByPlaceholderText('Insert checkpoint');
    const submitButton = screen.getByRole('button');

    userEvent.type(titleInput, 'Prepare pizza');
    userEvent.type(checkpointInput[0], 'Buy fresh yeast');
    userEvent.type(checkpointInput[1], 'Check wood');

    userEvent.click(submitButton);
    const editButton = screen.getByTitle('edit');
    userEvent.click(editButton);

    expect(screen.getByDisplayValue('Prepare pizza')).toBeDefined();
    expect(screen.getByDisplayValue('Buy fresh yeast')).toBeDefined();
    expect(screen.getByDisplayValue('Check wood')).toBeDefined();
  });
});