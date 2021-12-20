/*

Musikverein Forchtenstein
Authors: Alexander Grill, Alexander Brenner

@ 2022

*/
import { render, screen } from '@testing-library/react';
import Eventpage from './eventpage';

test('renders learn react link', () => {
  render(<Eventpage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
