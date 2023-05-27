import type { LocalDateType, Maybe, Scalars, TimeType, UrlParams } from '../../../shared/generated-types/graphql';

export type QueryParams = {
  [key: Scalars['String']]: Scalars['String'];
};

export type Overwrite<T1, T2> = Pick<T1, Exclude<keyof T1, keyof T2>> & T2;

const generateQueryParams = (urlParams: Maybe<Array<Maybe<UrlParams>>>): QueryParams => {
  const queryParams = {};
  if (urlParams && urlParams?.length > 0) {
    urlParams?.forEach((obj: Maybe<UrlParams>) => {
      const keyName = obj?.name;
      if (keyName) {
        Object.assign(queryParams, { [keyName]: obj?.value });
      }
    });
  }
  return queryParams;
};

const padValue = (value: number) => {
  return value < 10 ? '0' + value : value;
};

const formatTime = (unformattedTime: TimeType) => {
  return `${padValue(unformattedTime?.hour as number)}:${padValue(unformattedTime?.minute as number)}:${padValue(
    unformattedTime?.second as number,
  )}`;
};

const formatDate = (unformattedDate: LocalDateType, delimiter: string) => {
  return `${padValue(unformattedDate?.month as number)}${delimiter}${padValue(
    unformattedDate?.day as number,
  )}${delimiter}${unformattedDate?.year}`;
};

export const utils = {
  generateQueryParams,
  formatDate,
  formatTime,
};
