import resolvers from '../resolvers';
import { reportsServices } from '../services';
import type { Activities, Landlords, Reports } from '../../../../shared/generated-types/graphql';

const RentGuaranteeContext = {
  token: { 'rent-guaranteeUserToken': 'abc', 'rent-guaranteeSessionToken': 'def' },
};

describe('reportsResolvers', () => {
  test('query.reports() should resolve correctly', async () => {
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
    const results = await resolvers.Query.reports(null, { reportType: 'landlord' }, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(ReportsResponse);
  });

  test('query.landlordsDataForReports() method to invoke: getLandlordsOptedOutWithinTwoDaysAfterOptIn should resolve correctly', async () => {
    const LandlordsDataForReportsResponse: Landlords = {
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

    const args = { methodToInvoke: 'getLandlordsOptedOutWithinTwoDaysAfterOptIn' };

    const mockResponse = jest.fn().mockReturnValue(LandlordsDataForReportsResponse);
    const spy = jest.spyOn(reportsServices, 'getLandlordsDataForReports').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.landlordsDataForReports(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(LandlordsDataForReportsResponse);
  });

  test('query.landlordsDataForReports() method to invoke: getLandlordsWhoVerifiedIncomeNoLease should resolve correctly', async () => {
    const LandlordsDataForReportsResponse: Landlords = {
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

    const args = {
      methodToInvoke: 'getLandlordsWhoVerifiedIncomeNoLease',
      urlParams: '?daysToFilterApplications=5',
    };

    const mockResponse = jest.fn().mockReturnValue(LandlordsDataForReportsResponse);
    const spy = jest.spyOn(reportsServices, 'getLandlordsDataForReports').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.landlordsDataForReports(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(LandlordsDataForReportsResponse);
  });

  test('query.landlordsDataForReports() method to invoke: getLandlordsWithoutActionOnApplication should resolve correctly', async () => {
    const LandlordsDataForReportsResponse: Landlords = {
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

    const args = {
      methodToInvoke: 'getLandlordsWithoutActionOnApplication',
      urlParams: '?daysWithoutActionOnApplication=5',
    };

    const mockResponse = jest.fn().mockReturnValue(LandlordsDataForReportsResponse);
    const spy = jest.spyOn(reportsServices, 'getLandlordsDataForReports').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.landlordsDataForReports(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(LandlordsDataForReportsResponse);
  });

  test('query.landlordsDataForReports() method to invoke: getLandlordsWithoutPaymentsWithinFiveDaysOfPolicyCreation should resolve correctly', async () => {
    const LandlordsDataForReportsResponse: Landlords = {
      rentGuaranteeLandlords: [],
    };

    const args = { methodToInvoke: 'getLandlordsWithoutPaymentsWithinFiveDaysOfPolicyCreation' };

    const mockResponse = jest.fn().mockReturnValue(LandlordsDataForReportsResponse);
    const spy = jest.spyOn(reportsServices, 'getLandlordsDataForReports').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.landlordsDataForReports(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(LandlordsDataForReportsResponse);
  });

  test('query.getUserActivityDataForReports() method to invoke: getUserActivityOptIns should resolve correctly', async () => {
    const UserActivityDataForReportsResponse: Activities = {
      userActivities: [
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
    };

    const args = {
      methodToInvoke: 'getUserActivityOptIns',
      urlParams: [
        {
          name: 'limit',
          value: '20',
        },
      ],
    };

    const mockResponse = jest.fn().mockReturnValue(UserActivityDataForReportsResponse);
    const spy = jest.spyOn(reportsServices, 'getUserActivityDataForReports').mockImplementation((methodToInvoke: string) => {
      if(methodToInvoke == 'getUserActivityOptIns') {
        return mockResponse();
      }
      return null;
    });
    const results = await resolvers.Query.userActivityDataForReports(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(UserActivityDataForReportsResponse);
  });

  test('query.getUserActivityDataForReports() method to invoke: getUserActivityAllEvents should resolve correctly', async () => {
    const UserActivityDataForReportsResponse: Activities = {
      userActivities: [
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
    };

    const args = {
      methodToInvoke: 'getUserActivityAllEvents',
      urlParams: [
        {
          name: 'limit',
          value: '20',
        },
      ],
    };

    const mockResponse = jest.fn().mockReturnValue(UserActivityDataForReportsResponse);
    const spy = jest.spyOn(reportsServices, 'getUserActivityDataForReports').mockImplementation((methodToInvoke: string) => {
      if(methodToInvoke == 'getUserActivityAllEvents') {
        return mockResponse();
      }
      return null;
    });
    const results = await resolvers.Query.userActivityDataForReports(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(UserActivityDataForReportsResponse);
  });

  test('query.getUserActivityDataForReports() method to invoke: getApplicationFlagsUserActivityEvents should resolve correctly', async () => {
    const UserActivityDataForReportsResponse: Activities = {
      userActivities: [
        {
          applicationId: '34703037754535098301655151536049',
          incomeToRentEligible: true,
          incomeUpdatedDate: 1655151557675,
          listingAlias: '39hdfa962zj8p',
          createdDate: 1655151557675,
          userToken: '158519725'
        },
        {
          applicationId: '30510918988774414781655145168006',
          incomeToRentEligible: true,
          incomeUpdatedDate: 1655145188430,
          listingAlias: '2h4dncdf87cu8',
          createdDate: 1655145188430,
          userToken: '158482833'
        },
        {
          applicationId: '21123213180864638201655144786000',
          incomeToRentEligible: true,
          incomeUpdatedDate: 1655144804721,
          listingAlias: '3z1g5rzka97zc',
          createdDate: 1655144804721,
          userToken: '158480477'
        },
      ],
    };

    const args = {
      methodToInvoke: 'getApplicationFlagsUserActivityEvents',
      urlParams: [
        {
          name: 'limit',
          value: '20',
        },
      ],
    };

    const mockResponse = jest.fn().mockReturnValue(UserActivityDataForReportsResponse);
    const spy = jest.spyOn(reportsServices, 'getUserActivityDataForReports').mockImplementation((methodToInvoke: string) => {
      if(methodToInvoke == 'getApplicationFlagsUserActivityEvents') {
        return mockResponse();
      }
      return null;
    });
    const results = await resolvers.Query.userActivityDataForReports(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(UserActivityDataForReportsResponse);
  });

  test('query.getUserActivityDataForReports() method to invoke: getRentVoucherCoverageUserActivityEvents should resolve correctly', async () => {
    const UserActivityDataForReportsResponse: Activities = {
      userActivities: [
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
    };

    const args = {
      methodToInvoke: 'getRentVoucherCoverageUserActivityEvents',
      urlParams: [
        {
          name: 'limit',
          value: '20',
        },
      ],
    };

    const mockResponse = jest.fn().mockReturnValue(UserActivityDataForReportsResponse);
    const spy = jest.spyOn(reportsServices, 'getUserActivityDataForReports').mockImplementation((methodToInvoke: string) => {
      if(methodToInvoke == 'getRentVoucherCoverageUserActivityEvents') {
        return mockResponse();
      }
      return null;
    });
    const results = await resolvers.Query.userActivityDataForReports(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(UserActivityDataForReportsResponse);
  });
});
