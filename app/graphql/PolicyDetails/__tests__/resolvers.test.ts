import resolvers from '../resolvers';
import { policyDetailsServices } from '../services';
import type {
  CancelPolicyResponse,
  HistoryForPolicyRelatedActionsType,
  ReinstateDroppedPolicyResponse,
} from '../../../../shared/generated-types/graphql';
import { mockPolicyDetailsResponse } from './mockResponse';

const RentGuaranteeContext = {
  token: { 'rent-guaranteeUserToken': 'abc', 'rent-guaranteeSessionToken': 'def' },
};

describe('policyDetailsResolvers', () => {
  test('query.expandedPolicyDetails() should resolve correctly', async () => {
    const PolicyDetailsResponse = mockPolicyDetailsResponse.response;
    const policyId = '01F8R8PVRVHXHK7EKCZSHE58H3';
    const args = {
      policyId,
    };
    const mockResponse = jest.fn().mockReturnValue(PolicyDetailsResponse);
    const spy = jest.spyOn(policyDetailsServices, 'getExpandedPolicyDetails').mockImplementation(() => mockResponse());
    const results = await resolvers.Query.expandedPolicyDetails(PolicyDetailsResponse, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(PolicyDetailsResponse);
  });

  test('query.historyForPolicyRelatedActions() should resolve correctly', async () => {
    const historyForPolicyResponse: HistoryForPolicyRelatedActionsType = {
      policyId: '01F8R8PVRVHXHK7EKCZSHE58H3',
      action: 'SAVE_POLICY_WITH_APPLICATION_BY_LEASE_ID',
      createdDate: 1624312082206,
      message: 'applicationId: 5465986684, leaseId: 561451686, status: applicationIneligible',
      source: 'LANDLORD_USER_TOKEN',
      sourceId: '6548',
    };
    const policyId = '01F8R8PVRVHXHK7EKCZSHE58H3';
    const args = {
      policyId,
    };
    const mockResponse = jest.fn().mockReturnValue(historyForPolicyResponse);
    const spy = jest
      .spyOn(policyDetailsServices, 'getHistoryForPolicyRelatedActions')
      .mockImplementation(() => mockResponse());
    const results = await resolvers.Query.historyForPolicyRelatedActions(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(historyForPolicyResponse);
  });

  test('mutation.cancelPolicy should resolve correctly', async () => {
    const cancelPolicyResponse: CancelPolicyResponse = {
      success: true,
      httpStatus: 200,
    };
    const policyId = '01F8R8PVRVHXHK7EKCZSHE58H3';
    const caseNumber = '12345';
    const note = 'Cancelling Policy';
    const args = {
      policyId,
      caseNumber,
      note,
    };
    const mockResponse = jest.fn().mockReturnValue(cancelPolicyResponse);
    const spy = jest.spyOn(policyDetailsServices, 'cancelPolicy').mockImplementation(() => mockResponse());
    const results = await resolvers.Mutation.cancelPolicy(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(cancelPolicyResponse);
  });

  test('mutation.reinstateDroppedPolicy should resolve correctly', async () => {
    const reinstateDroppedPolicyResponse: ReinstateDroppedPolicyResponse = {
      success: true,
      httpStatus: 200,
    };
    const policyId = '01F8R8PVRVHXHK7EKCZSHE58H3';
    const caseNumber = '12345';
    const note = 'Reinstating Policy';
    const args = {
      policyId,
      caseNumber,
      note,
    };
    const mockResponse = jest.fn().mockReturnValue(reinstateDroppedPolicyResponse);
    const spy = jest.spyOn(policyDetailsServices, 'reinstateDroppedPolicy').mockImplementation(() => mockResponse());
    const results = await resolvers.Mutation.reinstateDroppedPolicy(null, args, RentGuaranteeContext);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(reinstateDroppedPolicyResponse);
  });
});
