import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FormProvider, FormContext } from '../src/context/FormContext';

test('FormContext provides and updates form data', () => {
  const TestComponent = () => {
    const { formData, setFormData } = React.useContext(FormContext);

    return (
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          data-testid="name-input"
        />
        <span data-testid="name-display">{formData.name}</span>
      </div>
    );
  };

  const { getByTestId } = render(
    <FormProvider>
      <TestComponent />
    </FormProvider>
  );

  const input = getByTestId('name-input');
  fireEvent.change(input, { target: { value: 'John Doe' } });

  expect(getByTestId('name-display')).toHaveTextContent('John Doe');
});
