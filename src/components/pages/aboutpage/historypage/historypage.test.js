/*

Musikverein Forchtenstein
Authors: Alexander Grill, Alexander Brenner

@ 2022

*/
import { render, screen } from '@testing-library/react';
import Historypage from './historypage';

test('renders learn react link', () => {
  render(<Historypage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
