import { buildPoliciesFromResponse } from '../PoliciesBuilder';
import type { UnformattedPolicy } from '../PoliciesBuilder';

describe('policiesBuilder', () => {
  test('buildPoliciesFromResponse with an array of PoliciesResponse as an input should match the modified response', async () => {
    const PoliciesResponse: UnformattedPolicy = {
      // @ts-ignore this is correct
      applicationId: '10003916685046831961618775202444',
      createdDate: 1618937916669,
      isActive: false,
      leaseId: 29382342,
      listingAlias: '1n01asq1b8qm8',
      paymentId: 463452342,
      policyStatus: 'APPLICATION_INELIGIBLE',
      updatedDate: 1619040157947,
      policyId: '1',
      leaseTermStartDate: 1662015600000,
      leaseTermEndDate: 1693465200000,
      policyTermStartDate: 1662015600000,
      policyTermEndDate: 1693465200000,
      landlordUserToken: '12345',
    };

    const policiesResponse = {
      policies: [PoliciesResponse],
      totalResults: 1,
    };

    const expectedPoliciesResponse = {
      policies: [
        {
          applicationId: { id: '10003916685046831961618775202444' },
          createdDate: 1618937916669,
          isActive: false,
          leaseId: { id: 29382342 },
          listingAlias: '1n01asq1b8qm8',
          paymentId: { id: 463452342 },
          policyStatus: 'APPLICATION_INELIGIBLE',
          updatedDate: 1619040157947,
          policyId: '1',
          leaseTermStartDate: new Date(1662015600000),
          leaseTermEndDate: new Date(1693465200000),
          policyTermStartDate: new Date(1662015600000),
          policyTermEndDate: new Date(1693465200000),
          landlordUserToken: '12345',
        },
      ],
    };

    const results = buildPoliciesFromResponse(policiesResponse);

    expect(results).toMatchObject(expectedPoliciesResponse);
  });
});
