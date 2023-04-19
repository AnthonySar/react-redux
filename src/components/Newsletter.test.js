import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Newsletter from './Newsletter';

it('render', () => {
  render(<Newsletter />);

  expect(screen.getByTestId('button-submit')).toBeInTheDocument();
})