/*

Musikverein Forchtenstein
Authors: Alexander Grill, Alexander Brenner

@ 2022

*/
import { render, screen } from '@testing-library/react';
import Legalpage from './legalpage';

test('renders learn react link', () => {
  render(<Legalpage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
