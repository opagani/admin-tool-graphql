import type { LocalDateType, Maybe, TimeType, UrlParams } from '../../../../shared/generated-types/graphql';
import type { QueryParams } from '../utils';
import { utils } from '../utils';

describe('utils tests', () => {
  test('generateQueryParams() should return key=>value pair', async () => {
    const urlParams: Maybe<Array<Maybe<UrlParams>>> = [
      { name: 'paramName1', value: 'paramValue1' },
      { name: 'paramName2', value: 'paramValue2' },
    ];
    const expectedVal: QueryParams = {
      paramName1: 'paramValue1',
      paramName2: 'paramValue2',
    };
    const queryParams: QueryParams = utils.generateQueryParams(urlParams);

    expect(queryParams).toStrictEqual(expectedVal);
  });

  test('formatDate() should mm/dd/yyyy', async () => {
    const date1: LocalDateType = {
      year: 2022,
      month: 12,
      day: 1,
    };

    const date2: LocalDateType = {
      year: 2022,
      month: 1,
      day: 1,
    };

    const date1Formatted: string = utils.formatDate(date1, '/');

    expect(date1Formatted).toStrictEqual('12/01/2022');

    const date1DashFormatted: string = utils.formatDate(date1, '-');

    expect(date1DashFormatted).toStrictEqual('12-01-2022');

    const date2Formatted: string = utils.formatDate(date2, '/');

    expect(date2Formatted).toStrictEqual('01/01/2022');
  });

  test('formatDate() should HH:mm:ss', async () => {
    const time1: TimeType = {
      hour: 9,
      minute: 23,
      second: 37,
      nano: 0,
    };
    const date1Formatted: string = utils.formatTime(time1);

    expect(date1Formatted).toStrictEqual('09:23:37');
  });
});
