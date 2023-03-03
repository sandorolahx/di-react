import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/di-react/i);
  expect(linkElement).toBeInTheDocument();
});

// it('sums numbers', () => {
//   expect(sum(1, 2)).toEqual(3);
//   expect(sum(2, 2)).toEqual(4);
// });
