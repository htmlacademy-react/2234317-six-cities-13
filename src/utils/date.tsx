import dayjs from 'dayjs';

const DATE_FORMAT = 'YYYY-MM-DD';
const INFO_FORMAT = 'MMM YYYY';

export const getSimpleDate = (date: string): string => date ? dayjs(date).format(DATE_FORMAT) : '';

export const getHumanizeDate = (date: string): string => date ? dayjs(date).format(INFO_FORMAT) : '';
