import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders a form to create list', () => {
  render(<App />);
  const linkElement = screen.getByText('Create list');
  expect(linkElement).toBeInTheDocument();
});
