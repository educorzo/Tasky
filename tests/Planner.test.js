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
        const submitButton = screen.getByRole('button');

        userEvent.type(titleInput, 'Prepare pizza');

        userEvent.click(submitButton);

        expect(screen.getByText('Prepare pizza')).toBeDefined();
      });
    });
  });
});

