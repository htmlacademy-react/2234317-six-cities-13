import {Users} from '../types/user';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const mockUsers: Users = [
  {
    name: 'Oliver Conner',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: false,
    email: 'Oliver.conner@gmail.com',
    token: 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20='
  },
  {
    name: 'Angelina Adams',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: false,
    email: 'Angelina.adams@gmail.com',
    token: 'T2xpd2khL2pFbm5lckBnbWFpbC5jb20='
  },
  {
    name: 'Mia Martin',
    avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
    isPro: true,
    email: 'Mia.martin@gmail.com',
    token: 'T2xpdmJvmoNvbm5lckBnbWFpbC5jb20='
  }
];
