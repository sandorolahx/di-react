import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { Provider } from 'inversify-react';
import container from './app/di/container';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider container={container}>
      <App />
    </Provider>
  </React.StrictMode>
);
