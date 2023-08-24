import {MAX_RATING_NUMBER, MAX_PERCENT_NUMBER} from '../const';

export const getRatingInPercents = (rating: number): string => `${rating / MAX_RATING_NUMBER * MAX_PERCENT_NUMBER}%`;
