import resolvers from '../resolvers';
import { searchPoliciesServices } from '../services';
import type {
  HistoryType,
  LogIdType,
  Policy,
  PolicySearchTypes,
  PolicyStatuses,
} from '../../../../shared/generated-types/graphql';

const RentGuaranteeContext = {
  token: { 'rent-guaranteeUserToken': 'abc', 'rent-guaranteeSessionToken': 'def' },
};

describe('searchPoliciesResolvers', () => {
  test('query.searchPolicies() with listing alias should resolve correctly', async () => {
    const PoliciesResponse: Policy = {
      applicationId: { id: '10003916685046831961618775202444' },
      createdDate: 1618937916669,
      isActive: false,
      leaseId: { id: 29382342 },
      listingAlias: '1n01asq1b8qm8',
      paymentId: { id: 463452342 },
      policyStatus: 'APPLICATION_INELIGIBLE',
      updatedDate: 1619040157947,
      policyId: '1',
      leaseTermStartDate: new Date(1621439690054),
      leaseTermEndDate: new Date(1621439690054),
      policyTermStartDate: new Date(1621977887592),
      policyTermEndDate: new Date(1621977887592),
      landlordUserToken: '12345',
      renterIds: ['23456789', '34567891', '45678912'],
    };
    const searchType = 'listingAlias';
    const searchValue = '1n01asq1b8qm8';
    const pageSize = 25;
    const fromIndex = 0;
    const args = {
      searchType,
      searchValue,
      pageSize,
      fromIndex,
    };
    const mockResponse = jest.fn().mockReturnValue(PoliciesResponse);
    const spy = jest.spyOn(searchPoliciesServices, 'getSearchPolicies').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.searchPolicies(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(PoliciesResponse);
  });

  test('query.searchPolicies() with application id should resolve correctly', async () => {
    const PoliciesResponse: Policy = {
      applicationId: { id: '10003916685046831961618775202444' },
      createdDate: 1618937916669,
      isActive: false,
      leaseId: { id: 29382342 },
      listingAlias: '1n01asq1b8qm8',
      paymentId: { id: 463452342 },
      policyStatus: 'APPLICATION_INELIGIBLE',
      updatedDate: 1619040157947,
      policyId: '1',
      leaseTermStartDate: new Date(1621439690054),
      leaseTermEndDate: new Date(1621439690054),
      policyTermStartDate: new Date(1621977887592),
      policyTermEndDate: new Date(1621977887592),
      landlordUserToken: '12345',
      renterIds: ['23456789', '34567891', '45678912'],
    };
    const searchType = 'applicationId';
    const searchValue = '10003916685046831961618775202444';
    const pageSize = 25;
    const fromIndex = 0;
    const args = {
      searchType,
      searchValue,
      pageSize,
      fromIndex,
    };
    const mockResponse = jest.fn().mockReturnValue(PoliciesResponse);
    const spy = jest.spyOn(searchPoliciesServices, 'getSearchPolicies').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.searchPolicies(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(PoliciesResponse);
  });

  test('query.searchPolicies() with payment id should resolve correctly', async () => {
    const PoliciesResponse: Policy = {
      applicationId: { id: '10003916685046831961618775202444' },
      createdDate: 1618937916669,
      isActive: false,
      leaseId: { id: 29382342 },
      listingAlias: '1n01asq1b8qm8',
      paymentId: { id: 463452342 },
      policyStatus: 'APPLICATION_INELIGIBLE',
      updatedDate: 1619040157947,
      policyId: '1',
      leaseTermStartDate: new Date(1621439690054),
      leaseTermEndDate: new Date(1621439690054),
      policyTermStartDate: new Date(1621977887592),
      policyTermEndDate: new Date(1621977887592),
      landlordUserToken: '12345',
      renterIds: ['23456789', '34567891', '45678912'],
    };
    const searchType = 'paymentId';
    const searchValue = '463452342';
    const pageSize = 25;
    const fromIndex = 0;
    const args = {
      searchType,
      searchValue,
      pageSize,
      fromIndex,
    };
    const mockResponse = jest.fn().mockReturnValue(PoliciesResponse);
    const spy = jest.spyOn(searchPoliciesServices, 'getSearchPolicies').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.searchPolicies(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(PoliciesResponse);
  });

  test('query.searchPolicies() with lease id should resolve correctly', async () => {
    const PoliciesResponse: Policy = {
      applicationId: { id: '10003916685046831961618775202444' },
      createdDate: 1618937916669,
      isActive: false,
      leaseId: { id: 29382342 },
      listingAlias: '1n01asq1b8qm8',
      paymentId: { id: 463452342 },
      policyStatus: 'APPLICATION_INELIGIBLE',
      updatedDate: 1619040157947,
      policyId: '1',
      leaseTermStartDate: new Date(1621439690054),
      leaseTermEndDate: new Date(1621439690054),
      policyTermStartDate: new Date(1621977887592),
      policyTermEndDate: new Date(1621977887592),
      landlordUserToken: '12345',
      renterIds: ['23456789', '34567891', '45678912'],
    };
    const searchType = 'leaseId';
    const searchValue = '29382342';
    const pageSize = 25;
    const fromIndex = 0;
    const args = {
      searchType,
      searchValue,
      pageSize,
      fromIndex,
    };
    const mockResponse = jest.fn().mockReturnValue(PoliciesResponse);
    const spy = jest.spyOn(searchPoliciesServices, 'getSearchPolicies').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.searchPolicies(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(PoliciesResponse);
  });

  test('query.searchPolicies() with policy id should resolve correctly', async () => {
    const PoliciesResponse: Policy = {
      applicationId: { id: '10003916685046831961618775202444' },
      createdDate: 1618937916669,
      isActive: false,
      leaseId: { id: 29382342 },
      listingAlias: '1n01asq1b8qm8',
      paymentId: { id: 463452342 },
      policyStatus: 'APPLICATION_INELIGIBLE',
      updatedDate: 1619040157947,
      policyId: '1',
      leaseTermStartDate: new Date(1621439690054),
      leaseTermEndDate: new Date(1621439690054),
      policyTermStartDate: new Date(1621977887592),
      policyTermEndDate: new Date(1621977887592),
      landlordUserToken: '12345',
      renterIds: ['23456789', '34567891', '45678912'],
    };
    const searchType = 'policyId';
    const searchValue = '1';
    const pageSize = 25;
    const fromIndex = 0;
    const args = {
      searchType,
      searchValue,
      pageSize,
      fromIndex,
    };
    const mockResponse = jest.fn().mockReturnValue(PoliciesResponse);
    const spy = jest.spyOn(searchPoliciesServices, 'getSearchPolicies').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.searchPolicies(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(PoliciesResponse);
  });

  test('query.searchPolicies() with policy status should resolve correctly', async () => {
    const PoliciesResponse: Policy = {
      applicationId: { id: '10003916685046831961618775202444' },
      createdDate: 1618937916669,
      isActive: false,
      leaseId: { id: 29382342 },
      listingAlias: '1n01asq1b8qm8',
      paymentId: { id: 463452342 },
      policyStatus: 'APPLICATION_INELIGIBLE',
      updatedDate: 1619040157947,
      policyId: '1',
      leaseTermStartDate: new Date(1621439690054),
      leaseTermEndDate: new Date(1621439690054),
      policyTermStartDate: new Date(1621977887592),
      policyTermEndDate: new Date(1621977887592),
      landlordUserToken: '12345',
      renterIds: ['23456789', '34567891', '45678912'],
    };
    const searchType = 'policyStatus';
    const searchValue = 'applicationIneligible';
    const pageSize = 25;
    const fromIndex = 0;
    const args = {
      searchType,
      searchValue,
      pageSize,
      fromIndex,
    };
    const mockResponse = jest.fn().mockReturnValue(PoliciesResponse);
    const spy = jest.spyOn(searchPoliciesServices, 'getSearchPolicies').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.searchPolicies(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(PoliciesResponse);
  });

  test('query.searchPolicies() with landlord email should resolve correctly', async () => {
    const PoliciesResponse: Policy = {
      applicationId: { id: '10003916685046831961618775202444' },
      createdDate: 1618937916669,
      isActive: false,
      leaseId: { id: 29382342 },
      listingAlias: '1n01asq1b8qm8',
      paymentId: { id: 463452342 },
      policyStatus: 'APPLICATION_INELIGIBLE',
      updatedDate: 1619040157947,
      policyId: '1',
      leaseTermStartDate: new Date(1621439690054),
      leaseTermEndDate: new Date(1621439690054),
      policyTermStartDate: new Date(1621977887592),
      policyTermEndDate: new Date(1621977887592),
      landlordUserToken: '12345',
      renterIds: ['23456789', '34567891', '45678912'],
    };
    const searchType = 'email';
    const searchValue = 'mockeduser@zillow.com';
    const pageSize = 25;
    const fromIndex = 0;
    const args = {
      searchType,
      searchValue,
      pageSize,
      fromIndex,
    };
    const mockResponse = jest.fn().mockReturnValue(PoliciesResponse);
    const spy = jest.spyOn(searchPoliciesServices, 'getSearchPolicies').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.searchPolicies(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(PoliciesResponse);
  });

  test('query.history() should resolve correctly with searchType=listingAlias', async () => {
    const historyModel: HistoryType = {
      idType: 'LISTING_ALIAS',
      idValue: '1n01asq1b8qm8',
      action: 'OPT_IN',
      createdDate: 1620755924809,
      userToken: '163349634',
      message: 'message',
    };
    const logIdType = 'listingAlias' as LogIdType;
    const logIdValue = '1n01asq1b8qm8';
    const args = {
      logIdType,
      logIdValue,
    };
    const mockResponse = jest.fn().mockReturnValue(historyModel);
    const spy = jest.spyOn(searchPoliciesServices, 'getHistory').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.history(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(historyModel);
  });
});

test('query.history() should resolve correctly with searchType=userToken', async () => {
  const historyModel: HistoryType = {
    idType: 'LISTING_ALIAS',
    idValue: '1n01asq1b8qm8',
    action: 'OPT_IN',
    createdDate: 1620755924809,
    userToken: '163349634',
    message: 'message',
  };
  const logIdType = 'userToken' as LogIdType;
  const logIdValue = '163349634';
  const args = {
    logIdType,
    logIdValue,
  };
  const mockResponse = jest.fn().mockReturnValue(historyModel);
  const spy = jest.spyOn(searchPoliciesServices, 'getHistory').mockImplementation(() => mockResponse());
  const results = await resolvers.Query.history(null, args, RentGuaranteeContext);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(results).toMatchObject(historyModel);
});

test('query.policySearchTypes() should resolve correctly', async () => {
  const PoliciesSearchTypesResponse: PolicySearchTypes = {
    values: [
      { value: 'policyId', displayName: 'Policy Id' },
      { value: 'listingAlias', displayName: 'Listing Alias' },
      { value: 'landlordUserToken', displayName: 'Landlord User Token' },
      { value: 'landlordEmail', displayName: 'Landlord Email' },
      { value: 'applicationId', displayName: 'Application Id' },
      { value: 'leaseId', displayName: 'Lease Id' },
      { value: 'paymentId', displayName: 'Payment Id' },
      { value: 'policyStatus', displayName: 'Policy Status' },
    ],
  };
  const mockResponse = jest.fn().mockReturnValue(PoliciesSearchTypesResponse);
  const spy = jest.spyOn(searchPoliciesServices, 'getPolicySearchTypes').mockImplementation(() => mockResponse());
  const results = await resolvers.Query.policySearchTypes(null, null, RentGuaranteeContext);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(results).toMatchObject(PoliciesSearchTypesResponse);
});

test('query.policyStatuses() should resolve correctly', async () => {
  const PoliciesStatusesResponse: PolicyStatuses = {
    values: [
      { value: 'active', displayName: 'Active' },
      { value: 'draft', displayName: 'Draft' },
      { value: 'paymentIneligible', displayName: 'Payment Ineligible' },
      { value: 'coverageRequestSigningCancelled', displayName: 'Coverage Request Signing Cancelled' },
      { value: 'coverageRequestSigned', displayName: 'Coverage Request Signed' },
      { value: 'pendingActivation', displayName: 'Pending Activation' },
      { value: 'expired', displayName: 'Expired' },
      { value: 'pendingCancellation', displayName: 'Pending Cancellation' },
      { value: 'cancelled', displayName: 'Cancelled' },
      { value: 'dropped', displayName: 'Dropped' },
      { value: 'stale', displayName: 'Stale' },
    ],
  };
  const mockResponse = jest.fn().mockReturnValue(PoliciesStatusesResponse);
  const spy = jest.spyOn(searchPoliciesServices, 'getPolicyStatuses').mockImplementation(() => mockResponse());
  const results = await resolvers.Query.policyStatuses(null, null, RentGuaranteeContext);

  expect(spy).toHaveBeenCalledTimes(1);
  expect(results).toMatchObject(PoliciesStatusesResponse);
});
