import React, { createContext, useState } from 'react';

// FormContext exposes:
// - formData: { name, email, message }  (strings)
// - setFormData: function to merge/replace formData
// - resetForm: convenience to clear fields back to initial values
export const FormContext = createContext({
  formData: { name: '', email: '', message: '' },
  setFormData: () => {},
  resetForm: () => {},
});

export const FormProvider = ({ children }) => {
  // Initial shape of the contact form. Keep defaults here so consumers can rely on keys existing.
  const initial = { name: '', email: '', message: '' };
  const [formData, setFormData] = useState(initial);

  // resetForm is a small helper so consumers don't need to remember the initial shape.
  const resetForm = () => setFormData(initial);

  return (
    <FormContext.Provider value={{ formData, setFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
