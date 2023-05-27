import { reportsServices } from '../services';
import type { Activities, Landlords, Reports } from '../../../../shared/generated-types/graphql';
import axios from 'axios';
import nodeMonitor from '../../../server/utils/nodeMonitor';
import log from '../../../server/utils/log';

jest.mock('axios');
jest.mock('../../../server/utils/nodeMonitor');
jest.mock('../../../server/utils/log');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('reportsServices', () => {
  test('fetches successfully data from an API (getReportsDetails)', async () => {
    const ReportsResponse: Reports = {
      reportsDetails: [
        {
          reportName: 'Landlords Without Payments',
          reportDescription:
            'get landlords with eligible tenants, signed lease but incomplete payments within 5 days of policy creation/lease sent out',
          methodToInvoke: 'getLandlordsWithoutPaymentsWithinFiveDaysOfPolicyCreation',
          methodParamsDetails: [],
        },
        {
          reportName: 'Landlords Without Action On Application',
          reportDescription: 'get landlords who opted in but have not taken action on any application',
          methodToInvoke: 'getLandlordsWithoutActionOnApplication',
          methodParamsDetails: [
            {
              paramName: 'daysWithoutActionOnApplication',
              paramDataType: 'Long',
              paramDefaultValue: 5,
            },
          ],
        },
      ],
    };

    const mockResponse = jest.fn().mockReturnValue(ReportsResponse);
    const spy = jest.spyOn(reportsServices, 'getReportsDetails').mockImplementation(() => mockResponse());
    const results = await reportsServices.getReportsDetails('123456', '78910', 'landlord');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(ReportsResponse);
  });

  test('fetches successfully data from an API (landlordsOptedOutWithinTwoDaysAfterOptIn)', async () => {
    const LandlordsHistory: Landlords = {
      rentGuaranteeLandlords: [
        {
          landlord: {
            landlordUserToken: '164974608',
          },
        },
        {
          landlord: {
            landlordUserToken: '163349634',
          },
        },
      ],
    };

    const mockResponse = jest.fn().mockReturnValue(LandlordsHistory);
    const spy = jest.spyOn(reportsServices, 'getLandlordsDataForReports').mockImplementation(() => mockResponse());
    const results = await reportsServices.getLandlordsDataForReports(
      'landlordsOptedOutWithinTwoDaysAfterOptIn',
      '',
      '123456',
      '78910',
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(LandlordsHistory);
  });

  test('fetches successfully data from an API (landlordsWhoVerifiedIncomeNoLease)', async () => {
    const LandlordsHistory: Landlords = {
      rentGuaranteeLandlords: [
        {
          landlord: {
            landlordUserToken: '167470119',
            firstName: 'charles',
            lastName: 'young',
            emails: [],
            phones: ['9738434155'],
          },
        },
      ],
    };

    const mockResponse = jest.fn().mockReturnValue(LandlordsHistory);
    const spy = jest.spyOn(reportsServices, 'getLandlordsDataForReports').mockImplementation(() => mockResponse());
    const results = await reportsServices.getLandlordsDataForReports(
      'landlordsWhoVerifiedIncomeNoLease',
      'daysToFilterApplications=5',
      '123456',
      '78910',
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(LandlordsHistory);
  });

  test('fetches successfully data from an API (landlordsWithoutActionOnApplication)', async () => {
    const LandlordsHistory: Landlords = {
      rentGuaranteeLandlords: [
        {
          landlord: {
            landlordUserToken: '167470119',
            firstName: 'charles',
            lastName: 'young',
            emails: ['john@gmail.com'],
            phones: ['9738434155'],
          },
        },
        {
          landlord: {
            landlordUserToken: '167470220',
            firstName: 'john',
            lastName: 'mink',
            emails: ['johnm@gmail.com'],
            phones: ['97384342000'],
          },
        },
      ],
    };

    const mockResponse = jest.fn().mockReturnValue(LandlordsHistory);
    const spy = jest.spyOn(reportsServices, 'getLandlordsDataForReports').mockImplementation(() => mockResponse());
    const results = await reportsServices.getLandlordsDataForReports(
      'landlordsWithoutActionOnApplication',
      'daysWithoutActionOnApplication=5',
      '123456',
      '78910',
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(LandlordsHistory);
  });

  test('fetches successfully data from an API (landlordsWithoutPaymentsWithinFiveDaysOfPolicyCreation)', async () => {
    const LandlordsHistory: Landlords = {
      rentGuaranteeLandlords: [],
    };

    const mockResponse = jest.fn().mockReturnValue(LandlordsHistory);
    const spy = jest.spyOn(reportsServices, 'getLandlordsDataForReports').mockImplementation(() => mockResponse());
    const results = await reportsServices.getLandlordsDataForReports(
      'landlordsWithoutPaymentsWithinFiveDaysOfPolicyCreation',
      '',
      '123456',
      '78910',
    );

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(LandlordsHistory);
  });

  test('fetches successfully data from an API (getUserActivityOptIns)', async () => {
    const userActivities: Activities = {
      __typename: 'Activities',
      userActivities: [
        {
          __typename: 'ListingActivity',
          idType: 'listingAlias',
          idValue: '2eanuqryn6djr',
          action: 'optIn',
          createdDate: 1655139677299,
          userToken: '158450325',
        },
        {
          __typename: 'ListingActivity',
          idType: 'listingAlias',
          idValue: '4yhu28wprt2fg',
          action: 'optIn',
          createdDate: 1655139754827,
          userToken: '158450985',
        },
        {
          __typename: 'ListingActivity',
          idType: 'listingAlias',
          idValue: 'qtr08hnk30vh',
          action: 'optIn',
          createdDate: 1655139781786,
          userToken: '158451364',
        },
      ],
    };

    const apiResp = {
      data: {
        logs: [
          {
            idType: 'listingAlias',
            idValue: '2eanuqryn6djr',
            action: 'optIn',
            createdDate: 1655139677299,
            userToken: '158450325',
          },
          {
            idType: 'listingAlias',
            idValue: '4yhu28wprt2fg',
            action: 'optIn',
            createdDate: 1655139754827,
            userToken: '158450985',
          },
          {
            idType: 'listingAlias',
            idValue: 'qtr08hnk30vh',
            action: 'optIn',
            createdDate: 1655139781786,
            userToken: '158451364',
          },
        ],
      },
    };

    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockResolvedValue({ data: { data: apiResp.data } });
    const results = await reportsServices.getUserActivityDataForReports(
      'getUserActivityOptIns',
      [
        {
          name: 'limit',
          value: '20',
        },
      ],
      '123456',
      '78910',
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(userActivities);
  });

  test('fetches successfully data from an API (getUserActivityAllEvents)', async () => {
    const userActivities: Activities = {
      __typename: 'Activities',
      userActivities: [
        {
          __typename: 'ListingActivity',
          idType: 'listingAlias',
          idValue: '3jfpy39r9uq8y',
          action: 'securityDepositUpdated',
          createdDate: 1655181792464,
          userToken: '158711401',
          message: 'from null to null',
        },
        {
          __typename: 'ListingActivity',
          idType: 'listingAlias',
          idValue: '2xtcpj1yek64d',
          action: 'optIn',
          createdDate: 1655181809267,
          userToken: '158711452',
        },
        {
          __typename: 'ListingActivity',
          idType: 'listingAlias',
          idValue: '1ghfkw8dcwgeu',
          action: 'storeIncomeToRentFlag',
          createdDate: 1655167730493,
          userToken: '158622014',
          message: 'store income to rent flag as true',
        },
      ],
    };

    const apiResp = {
      data: {
        logs: [
          {
            idType: 'listingAlias',
            idValue: '3jfpy39r9uq8y',
            action: 'securityDepositUpdated',
            createdDate: 1655181792464,
            userToken: '158711401',
            message: 'from null to null',
          },
          {
            idType: 'listingAlias',
            idValue: '2xtcpj1yek64d',
            action: 'optIn',
            createdDate: 1655181809267,
            userToken: '158711452',
          },
          {
            idType: 'listingAlias',
            idValue: '1ghfkw8dcwgeu',
            action: 'storeIncomeToRentFlag',
            createdDate: 1655167730493,
            userToken: '158622014',
            message: 'store income to rent flag as true',
          },
        ],
      },
    };

    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockResolvedValue({ data: { data: apiResp.data } });
    const results = await reportsServices.getUserActivityDataForReports(
      'getUserActivityAllEvents',
      [
        {
          name: 'limit',
          value: '20',
        },
      ],
      '123456',
      '78910',
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(nodeMonitor.increment).toHaveBeenCalledTimes(1);
    expect(log.error).toHaveBeenCalledTimes(0);
    expect(results).toMatchObject(userActivities);
  });

  test('fetches successfully data from an API (getApplicationFlagsUserActivityEvents)', async () => {
    const userActivities: Activities = {
      __typename: 'Activities',
      userActivities: [
        {
          __typename: 'ApplicationActivity',
          applicationId: '34703037754535098301655151536049',
          incomeToRentEligible: true,
          createdDate: 1655151557675,
          incomeUpdatedDate: 1655151557675,
          listingAlias: '39hdfa962zj8p',
          userToken: '158519725'
        },
        {
          __typename: 'ApplicationActivity',
          applicationId: '30510918988774414781655145168006',
          incomeToRentEligible: true,
          createdDate: 1655145188430,
          incomeUpdatedDate: 1655145188430,
          listingAlias: '2h4dncdf87cu8',
          userToken: '158482833'
        },
        {
          __typename: 'ApplicationActivity',
          applicationId: '21123213180864638201655144786000',
          incomeToRentEligible: true,
          createdDate: 1655144804721,
          incomeUpdatedDate: 1655144804721,
          listingAlias: '3z1g5rzka97zc',
          userToken: '158480477'
        },
      ],
    };

    const apiResp = {
      data: {
        applicationFlagsUserActivity: [
          {
            'applicationId': '34703037754535098301655151536049',
            'incomeToRentEligible': true,
            'incomeUpdatedDate': 1655151557675,
            'listingAlias': '39hdfa962zj8p',
            'createdDate': 1655151557675,
            'userToken': '158519725'
          },
          {
            'applicationId': '30510918988774414781655145168006',
            'incomeToRentEligible': true,
            'incomeUpdatedDate': 1655145188430,
            'listingAlias': '2h4dncdf87cu8',
            'createdDate': 1655145188430,
            'userToken': '158482833'
          },
          {
            'applicationId': '21123213180864638201655144786000',
            'incomeToRentEligible': true,
            'incomeUpdatedDate': 1655144804721,
            'listingAlias': '3z1g5rzka97zc',
            'createdDate': 1655144804721,
            'userToken': '158480477'
          },
        ],
      },
    };

    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockResolvedValue({ data: { data: apiResp.data } });
    const results = await reportsServices.getUserActivityDataForReports(
        'getApplicationFlagsUserActivityEvents',
        [
          {
            name: 'limit',
            value: '20',
          },
        ],
        '123456',
        '78910',
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(nodeMonitor.increment).toHaveBeenCalledTimes(1);
    expect(log.error).toHaveBeenCalledTimes(0);
    expect(results).toMatchObject(userActivities);
  });

  test('fetches successfully data from an API (getRentVoucherCoverageUserActivityEvents)', async () => {
    const userActivities: Activities = {
      __typename: 'Activities',
      userActivities: [
        {
          __typename: 'VoucherActivity',
          applicationId: '21835333576251897921658464211333',
          listingAlias: '3vqau0dm9r8zy',
          voucherToRentCoverage: 'partiallyCovered',
          createdDate: 1658472202386,
          updatedDate: 1658476502967,
          userToken: '180201146'
        },
        {
          __typename: 'VoucherActivity',
          applicationId: '71557841441959460691657822190390',
          listingAlias: '2pkmzzewfaf3j',
          voucherToRentCoverage: 'fullyCovered',
          createdDate: 1657822486716,
          updatedDate: 1657825130732,
          userToken: '176075615'
        },
        {
          __typename: 'VoucherActivity',
          applicationId: '32599288151145354771657032666856',
          listingAlias: '2wtfr07suuetd',
          voucherToRentCoverage: 'fullyCovered',
          createdDate: 1657034395658,
          updatedDate: 1657034579068,
          userToken: '170858822'
        },
      ],
    };

    const apiResp = {
      data: {
        rentVoucherCoverageUserActivity: [
          {
            applicationId: '21835333576251897921658464211333',
            listingAlias: '3vqau0dm9r8zy',
            voucherToRentCoverage: 'partiallyCovered',
            createdDate: 1658472202386,
            updatedDate: 1658476502967,
            userToken: '180201146'
          },
          {
            applicationId: '71557841441959460691657822190390',
            listingAlias: '2pkmzzewfaf3j',
            voucherToRentCoverage: 'fullyCovered',
            createdDate: 1657822486716,
            updatedDate: 1657825130732,
            userToken: '176075615'
          },
          {
            applicationId: '32599288151145354771657032666856',
            listingAlias: '2wtfr07suuetd',
            voucherToRentCoverage: 'fullyCovered',
            createdDate: 1657034395658,
            updatedDate: 1657034579068,
            userToken: '170858822'
          },
        ],
      },
    };

    const mockGet = jest.spyOn(axios, 'get');
    mockGet.mockResolvedValue({ data: { data: apiResp.data } });
    const results = await reportsServices.getUserActivityDataForReports(
        'getRentVoucherCoverageUserActivityEvents',
        [
          {
            name: 'limit',
            value: '20',
          },
        ],
        '123456',
        '78910',
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(nodeMonitor.increment).toHaveBeenCalledTimes(1);
    expect(log.error).toHaveBeenCalledTimes(0);
    expect(results).toMatchObject(userActivities);
  });
});
