import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from '../src/components/popups/contact';
import { FormProvider } from '../src/context/FormContext';

test('ContactForm handles input changes and form submission', () => {
  const handleClose = jest.fn();

  const { getByTestId } = render(
    <FormProvider>
      <ContactForm onClose={handleClose} />
    </FormProvider>
  );

  fireEvent.change(getByTestId('name-input'), { target: { value: 'John Doe' } });
  fireEvent.change(getByTestId('email-input'), { target: { value: 'john@example.com' } });
  fireEvent.change(getByTestId('message-input'), { target: { value: 'Hello!' } });

  expect(getByTestId('name-input').value).toBe('John Doe');
  expect(getByTestId('email-input').value).toBe('john@example.com');
  expect(getByTestId('message-input').value).toBe('Hello!');

  fireEvent.click(getByTestId('submit-btn'));
  // Add assertions for form submission if needed

  fireEvent.click(getByTestId('close-btn'));
  expect(handleClose).toHaveBeenCalled();
});
