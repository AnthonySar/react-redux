import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Newsletter from './Newsletter';

it('Test du rendu, inputs et checkbox du formulaire', async () => {
  render(<Newsletter />);

  // Variables
  const checkbox1 = screen.getByLabelText('1er Checkbox');
  const checkbox2 = screen.getByLabelText('2ième Checkbox');
  const checkbox3 = screen.getByLabelText('3ième Checkbox');

  // Initial values
  expect(checkbox1.checked).toBe(false);
  expect(checkbox2.checked).toBe(false);
  expect(checkbox3.checked).toBe(false);

  // On vérifie au click pour chaque checkbox 
  fireEvent.click(checkbox1);
  expect(checkbox1.checked).toBe(true);

  fireEvent.click(checkbox2);
  expect(checkbox2.checked).toBe(true);

  fireEvent.click(checkbox3);
  expect(checkbox3.checked).toBe(true);

  fireEvent.click(checkbox1);
  expect(checkbox1.checked).toBe(false);

  expect(screen.getByTestId('button-submit')).toBeInTheDocument();
  expect(screen.getByTestId('heading-test')).toHaveTextContent('Test de Formik');
})