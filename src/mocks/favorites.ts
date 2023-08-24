import {FavoriteOffers} from '../types/favorite-offer';

export const mockFavoriteOffers: FavoriteOffers = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://url-to-image/image.png'
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 132,
    city: {
      name: 'Paris',
      location: {
        latitude: 59.35513695496378,
        longitude: 91.67387615699948,
        zoom: 4
      }
    },
    location: {
      latitude: 59.35513695496378,
      longitude: 91.67387615699948,
      zoom: 6
    },
    isFavorite: false,
    isPremium: true,
    rating: 5,
    previewImage: 'https://url-to-image/image.png'
  }
];
