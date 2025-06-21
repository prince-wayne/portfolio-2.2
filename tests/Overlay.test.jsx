import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Overlay from '../src/components/popups/Overlay';
import ContactForm from '../src/components/popups/contact';

test('Overlay opens and closes correctly', () => {
  const { getByTestId, queryByTestId } = render(
    <Overlay>
      <ContactForm />
    </Overlay>
  );

  // Check that the overlay is not visible initially
  expect(queryByTestId('contact-form')).toBeNull();

  // Open the overlay
  fireEvent.click(getByTestId('open-overlay-btn'));
  expect(queryByTestId('contact-form')).toBeInTheDocument();

  // Close the overlay
  fireEvent.click(getByTestId('close-overlay-btn'));
  expect(queryByTestId('contact-form')).toBeNull();
});
