import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const mount = (element: HTMLElement) => {
  const root = createRoot(element);
  root.render(<App />);

  return {
    unmount: () => {
      root.unmount();
    },
  };
};

const start = () => {
  const element = document.getElementById('root');
  if (!element) {
    throw new Error('Root element not found');
  }

  mount(element);
};

start();

export { mount };
