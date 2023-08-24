export const MAX_RATING_NUMBER = 5;
export const MAX_PERCENT_NUMBER = 100;
export const MAX_OFFER_IMG_COUNT = 6;
export const NO_CARD_ID = '-1';
export const MAX_COMMENT_LENGTH = 50;

export const NO_FORM_DATA = {
  id: '-1',
  date: '',
  user: {
    name: '',
    avatarUrl: '',
    isPro: false
  },
  comment: '',
  rating: 0
};

export enum Locations {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
