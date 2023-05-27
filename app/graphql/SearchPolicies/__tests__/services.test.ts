import axios from 'axios';
import { searchPoliciesServices } from '../services';
import type {
  History,
  LogIdType,
  Policies,
  PolicySearchTypes,
  PolicyStatuses,
} from '../../../../shared/generated-types/graphql';
import type { RawResponseSearchPolicies } from '../models/rawResponseSearchPolicies';
import { SortBy, SortDir } from '../../../../shared/generated-types/graphql';

jest.mock('axios');

describe('searchPoliciesServices', () => {
  test('fetches successfully data from an API (getSearchPolicies)', async () => {
    const rawData: RawResponseSearchPolicies = {
      policies: [
        {
          createdDate: 1624309011062,
          updatedDate: 1624309299014,
          listingAlias: '3v32tuga55x6b',
          isActive: true,
          policyStatus: 'Active',
          paymentId: 1,
          leaseId: 853,
          applicationId: '46244009883584310881626994336051',
          policyId: '01F8R5S4KP2EVBV1FE3Q5GSHHW',
          policyTermStartDate: 1662015600000,
          policyTermEndDate: 1693465200000,
          landlordUserToken: '12345',
          renterIds: ['23456789', '34567891', '45678912'],
          premiumAmount: 3900,
          orderToPurchaseSigned: false,
        },
        {
          leaseTermStartDate: 1662015600000,
          leaseTermEndDate: 1693465200000,
          createdDate: 1624312097292,
          updatedDate: 1628699931434,
          listingAlias: '3v32tuga55x6b',
          isActive: false,
          policyStatus: 'Application Ineligible',
          paymentId: 11,
          leaseId: 56481651,
          applicationId: '549816511',
          policyId: '01F8R8QAGCG6FP2QQS7SGEQFZF',
          landlordUserToken: '12345678',
          renterIds: ['23456789', '34567891', '45678912'],
          premiumAmount: 3900,
          orderToPurchaseSigned: false,
        },
      ],
      totalResults: 2,
    };

    const policies: Policies = {
      policies: [
        {
          createdDate: 1624309011062,
          updatedDate: 1624309299014,
          listingAlias: '3v32tuga55x6b',
          isActive: true,
          policyStatus: 'Active',
          paymentId: { id: 1 },
          leaseId: { id: 853 },
          applicationId: { id: '46244009883584310881626994336051' },
          policyId: '01F8R5S4KP2EVBV1FE3Q5GSHHW',
          policyTermStartDate: new Date(1662015600000),
          policyTermEndDate: new Date(1693465200000),
          landlordUserToken: '12345',
          renterIds: ['23456789', '34567891', '45678912'],
        },
        {
          leaseTermStartDate: new Date(1662015600000),
          leaseTermEndDate: new Date(1693465200000),
          createdDate: 1624312097292,
          updatedDate: 1628699931434,
          listingAlias: '3v32tuga55x6b',
          isActive: false,
          policyStatus: 'Application Ineligible',
          paymentId: { id: 11 },
          leaseId: { id: 56481651 },
          applicationId: { id: '549816511' },
          policyId: '01F8R8QAGCG6FP2QQS7SGEQFZF',
          landlordUserToken: '12345678',
          renterIds: ['23456789', '34567891', '45678912'],
        },
      ],
      totalResults: 2,
    };

    (axios.get as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.resolve({ data: { response: rawData } }),
    );

    const results = await searchPoliciesServices.getSearchPolicies(
      'listingAlias',
      '3v32tuga55x6b',
      2,
      0,
      SortBy.UpdatedDate,
      SortDir.Desc,
      '123456',
      '78910',
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(policies);
  });

  test('fetches successfully data from an API (getPolicySearchTypes)', async () => {
    const data: PolicySearchTypes = {
      values: [
        {
          value: 'policyId',
          displayName: 'Policy Id',
        },
        {
          value: 'listingAlias',
          displayName: 'Listing Alias',
        },
        {
          value: 'landlordUserToken',
          displayName: 'Landlord User Token',
        },
        {
          value: 'landlordEmail',
          displayName: 'Landlord Email',
        },
        {
          value: 'applicationId',
          displayName: 'Application Id',
        },
        {
          value: 'leaseId',
          displayName: 'Lease Id',
        },
        {
          value: 'paymentId',
          displayName: 'Payment Id',
        },
        {
          value: 'policyStatus',
          displayName: 'Policy Status',
        },
      ],
    };

    (axios.get as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.resolve({ data: { response: data } }),
    );

    const results = await searchPoliciesServices.getPolicySearchTypes('123456', '78910');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(data);
  });

  test('fetches successfully data from an API (getPolicyStatuses)', async () => {
    const data: PolicyStatuses = {
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

    (axios.get as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.resolve({ data: { response: data } }),
    );

    const results = await searchPoliciesServices.getPolicyStatuses('123456', '78910');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(data);
  });

  test('fetches successfully data from an API (getHistory) with searchType=listingAlias', async () => {
    const data: History = {
      logs: [
        {
          idType: 'LISTING_ALIAS',
          idValue: '4m59p0y9kw7ec',
          action: 'OPT_IN',
          createdDate: 1627017072893,
          userToken: '163349634',
        },
        {
          idType: 'LISTING_ALIAS',
          idValue: '4m59p0y9kw7ec',
          action: 'OPT_OUT',
          createdDate: 1627058803864,
          userToken: '163349634',
        },
        {
          idType: 'LISTING_ALIAS',
          idValue: '4m59p0y9kw7ec',
          action: 'OPT_IN',
          createdDate: 1627058845150,
          userToken: '163349634',
        },
      ],
    };

    (axios.get as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.resolve({ data: { response: data } }),
    );

    const results = await searchPoliciesServices.getHistory(
      'listingAlias' as LogIdType,
      '4m59p0y9kw7ec',
      '123456',
      '78910',
    );

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(data);
  });

  test('fetches successfully data from an API (getHistory) with searchType=userToken', async () => {
    const data: History = {
      logs: [
        {
          idType: 'LISTING_ALIAS',
          idValue: '4m59p0y9kw7ec',
          action: 'OPT_IN',
          createdDate: 1627017072893,
          userToken: '163349634',
        },
        {
          idType: 'LISTING_ALIAS',
          idValue: '4m59p0y9kw7ec',
          action: 'OPT_OUT',
          createdDate: 1627058803864,
          userToken: '163349634',
        },
        {
          idType: 'LISTING_ALIAS',
          idValue: '4m59p0y9kw7ec',
          action: 'OPT_IN',
          createdDate: 1627058845150,
          userToken: '163349634',
        },
      ],
    };

    (axios.get as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.resolve({ data: { response: data } }),
    );

    const results = await searchPoliciesServices.getHistory('userToken' as LogIdType, '163349634', '123456', '78910');

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(data);
  });
});
