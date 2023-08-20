import {Location} from './location';
import {City} from './city';

export type FavoriteOffer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export type FavoriteOffers = FavoriteOffer[];
