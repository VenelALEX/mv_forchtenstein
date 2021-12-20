/*

Musikverein Forchtenstein
Authors: Alexander Grill, Alexander Brenner

@ 2022

*/
import { render, screen } from '@testing-library/react';
import Vorstandpage from './vorstandpage';

test('renders learn react link', () => {
  render(<Vorstandpage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
