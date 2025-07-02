import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Home from './Pages/Home';
import { FormProvider } from './context/FormContext';
// Importing the FormProvider from context/FormContext
// to provide form state management to the Home component
// and its children components.
// This allows us to manage form state globally within the application.
// The FormProvider wraps the Home component to ensure that
// all components within Home can access the form context.  

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormProvider>
        <Home/>
      </FormProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
