import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../../src/components/Dashboard';

test('renders a form to create list', () => {
  render(<Dashboard />);
  const linkElement = screen.getByText('Create list');
  expect(linkElement).toBeInTheDocument();
});
