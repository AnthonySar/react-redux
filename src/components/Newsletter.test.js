import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Newsletter from './Newsletter';

it('render', async () => {
  render(<Newsletter />);

  expect(screen.getByTestId('button-submit')).toBeInTheDocument();
  expect(screen.getByTestId('heading-test')).toHaveTextContent('Test de Formik');
})