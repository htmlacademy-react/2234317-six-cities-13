import {Comments} from '../types/comment';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const mockComments: Comments = [
  {
    id: '1',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  },
  {
    id: '2',
    date: '2021-09-17T16:34:94.569Z',
    user: {
      name: 'Angelina Adams',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 5
  },
  {
    id: '3',
    date: '2023-01-04T19:49:09.569Z',
    user: {
      name: 'Mia Martin',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 3
  }
];
