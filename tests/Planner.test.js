import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Planner from '../src/Planner';

describe('Planner', () => {
  describe('when creating a new list', () => {
    describe('and the list is submitted,', () => {
      test('the list is ready for use', () => {
        render(<Planner />);

        const titleInput = screen.getByPlaceholderText('Title');
        const checkpointInput = screen.getAllByPlaceholderText('Insert checkpoint');
        const submitButton = screen.getByRole('button');

        userEvent.type(titleInput, 'Prepare pizza');
        userEvent.type(checkpointInput[0], 'Buy fresh yeast');
        userEvent.type(checkpointInput[1], 'Check wood');

        userEvent.click(submitButton);

        expect(screen.getByText('Prepare pizza')).toBeDefined();
        expect(screen.getByText('Buy fresh yeast')).toBeDefined();
        expect(screen.getByText('Check wood')).toBeDefined();
      });
    });
  });
});

