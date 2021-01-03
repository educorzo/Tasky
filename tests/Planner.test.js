import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Planner from '../src/Planner';

describe('Planner', () => {
  describe('when creating a new list', () => {
    describe('and submit the list', () => {
      test('should appear the list', () => {
        render(<Planner />);

        const titleInput = screen.getByPlaceholderText('Title');
        const checkpointInput = screen.getByPlaceholderText('Insert checkpoint');
        const submitButton = screen.getByRole('button');

        userEvent.type(titleInput, 'Prepare pizza');
        userEvent.type(checkpointInput, 'Buy fresh yeast');

        userEvent.click(submitButton);

        expect(screen.getByText('Prepare pizza')).toBeDefined();
        expect(screen.getByText('Buy fresh yeast')).toBeDefined();
      });
    });
  });
});

