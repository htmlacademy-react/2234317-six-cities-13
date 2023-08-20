import {Offers} from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const mockOffers: Offers = [
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Washing machine',
      'Towels',
      'Coffee machine',
      'Kitchen',
      'Dishwasher',
      'Fridge'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg'
    ],
    maxAdults: 4
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Rome',
      location: {
        latitude: 37.30634933646378,
        longitude: 12.60843065499948,
        zoom: 12
      }
    },
    location: {
      latitude: 38.30634933646378,
      longitude: 12.60843065499316,
      zoom: 11
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 1,
    goods: [
      'Wi-Fi',
      'Towels',
      'Cabel TV',
      'Fridge'
    ],
    host: {
      name: 'Angelina Adams',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    images: [
      'img/room.jpg'
    ],
    maxAdults: 2
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
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 2,
    goods: [
      'Wi-Fi',
      'Towels',
      'Coffee machine',
      'Kitchen',
      'Cabel TV',
      'Fridge'
    ],
    host: {
      name: 'Mia Martin',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    images: [
      'img/studio-01.jpg'
    ],
    maxAdults: 3
  }
];
