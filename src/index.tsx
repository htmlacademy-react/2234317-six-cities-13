import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {mockOffers} from './mocks/offers';
import {mockFavoriteOffers} from './mocks/favorites';
import {mockComments} from './mocks/comments';
import {mockUsers} from './mocks/users';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offers={mockOffers}
      favorites = {mockFavoriteOffers}
      comments = {mockComments}
      users = {mockUsers}
    />
  </React.StrictMode>
);
