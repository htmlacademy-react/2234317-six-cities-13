import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {mockOffers} from './mocks/offers';
import {mockComments} from './mocks/comments';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={mockOffers}
      favorites = {mockOffers}
      comments = {mockComments}
    />
  </React.StrictMode>
);
