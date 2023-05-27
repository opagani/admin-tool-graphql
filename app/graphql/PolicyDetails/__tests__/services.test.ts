import axios from 'axios';
import { policyDetailsServices } from '../services';
import type {
  CancelPolicyResponse,
  HistoryForPolicyRelatedActions,
  PolicyDetails,
} from '../../../../shared/generated-types/graphql';
import { mockPolicyDetailsResponse } from './mockResponse';

const API = 'https://comet1.testpads.net/rent-guarantee/api/v1/admin';

const fetchExpandedPolicyDetailsData = async (policyId: string) => {
  const url = `${API}/getExpandedPolicyDetails?policyId=${policyId}`;
  const resp = await axios.get(url);

  return resp;
};

const fetchHistoryForPolicyRelatedActionsData = async (policyId: string) => {
  const url = `${API}/getPolicyActionLogs?policyId=${policyId}`;
  const resp = await axios.get(url);

  return resp;
};

jest.mock('axios');

describe('policyDetailsServices', () => {
  test('fetches successfully data from an API (expandedPolicyDetails)', async () => {
    const data: Record<string, PolicyDetails> = mockPolicyDetailsResponse;

    (axios.get as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.resolve(data),
    );

    await expect(fetchExpandedPolicyDetailsData('01F8R8PVRVHXHK7EKCZSHE58H3')).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(`${API}/getExpandedPolicyDetails?policyId=01F8R8PVRVHXHK7EKCZSHE58H3`);
  });

  test('fetches erroneously data from an API (expandedPolicyDetails)', async () => {
    const errorMessage = 'Network Error';

    (axios.get as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchExpandedPolicyDetailsData('01F8R8PVRVHXHK7EKCZSHE58H3')).rejects.toThrow(errorMessage);
  });

  test('fetches successfully data from an API (historyForPolicyRelatedActions)', async () => {
    const data: Record<string, HistoryForPolicyRelatedActions> = {
      data: {
        logs: [
          {
            policyId: '01F8R8PVRVHXHK7EKCZSHE58H3',
            action: 'SAVE_POLICY_WITH_APPLICATION_BY_LEASE_ID',
            createdDate: 1624312082206,
            message: 'applicationId: 5465986684, leaseId: 561451686, status: applicationIneligible',
            source: 'LANDLORD_USER_TOKEN',
            sourceId: '6548',
          },
        ],
      },
    };

    (axios.get as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.resolve(data),
    );

    await expect(fetchHistoryForPolicyRelatedActionsData('01F8R8PVRVHXHK7EKCZSHE58H3')).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(`${API}/getPolicyActionLogs?policyId=01F8R8PVRVHXHK7EKCZSHE58H3`);
  });

  test('fetches erroneously data from an API (historyForPolicyRelatedActions)', async () => {
    const errorMessage = 'Network Error';

    (axios.get as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );

    await expect(fetchHistoryForPolicyRelatedActionsData('01F8R8PVRVHXHK7EKCZSHE58H3')).rejects.toThrow(errorMessage);
  });

  test('updates successfully data from an API (cancelPolicyService)', async () => {
    const data: CancelPolicyResponse = {
      success: true,
      httpStatus: 200,
    };

    (axios.post as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.resolve({ data: data }),
    );

    const results = await policyDetailsServices.cancelPolicy(
      '01F8R8PVRVHXHK7EKCZSHE58H3',
      '12345',
      'Cancelling Policy',
      '123456',
      '78910',
    );

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(results).toMatchObject(data);
  });

  test('updates unsuccessfully data from an API (cancelPolicyService)', async () => {
    (axios.post as unknown as jest.Mock<Promise<Record<string, unknown>>>).mockImplementationOnce(() =>
      Promise.resolve({ data: null }),
    );

    const results = await policyDetailsServices.cancelPolicy(
      '01F8R8PVRVHXHK7EKCZSHE58H3',
      '12345',
      'Cancelling Policy',
      '123456',
      '78910',
    );

    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(results).toBeNull();
  });
});
