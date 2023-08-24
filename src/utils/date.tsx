import dayjs from 'dayjs';

const DATE_FORMAT = 'YYYY-MM-DD';
const INFO_FORMAT = 'MMM YYYY';
const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm:ssZ[Z]';

export const getSimpleDate = (date: string): string => date ? dayjs(date).format(DATE_FORMAT) : '';

export const getHumanizeDate = (date: string): string => date ? dayjs(date).format(INFO_FORMAT) : '';

export const getCurentDate = (): string => dayjs().format(DATE_TIME_FORMAT);
