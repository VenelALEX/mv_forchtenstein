/*

Musikverein Forchtenstein
Authors: Alexander Grill, Alexander Brenner

@ 2022

*/
import { render, screen } from '@testing-library/react';
import MyNavbar from './mynavbar';

test('renders learn react link', () => {
  render(<MyNavbar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
