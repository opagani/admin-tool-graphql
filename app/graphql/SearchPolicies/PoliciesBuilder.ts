import type { Policies, Policy } from '../../../shared/generated-types/graphql';
import { fromUnixTime } from 'date-fns';
import type { Overwrite } from '../utils/utils';

export type UnformattedPolicy = Overwrite<
  Policy,
  {
    applicationId: string;
    leaseId: number;
    paymentId: number;

    leaseTermStartDate: number;
    leaseTermEndDate: number;
    policyTermStartDate: number;
    policyTermEndDate: number;
  }
>;

const formatPolicy = (policy: UnformattedPolicy): Policy => {
  return {
    ...policy,
    applicationId: {
      id: policy.applicationId,
    },
    leaseId: {
      id: policy.leaseId,
    },
    paymentId: {
      id: policy.paymentId,
    },
    leaseTermStartDate: fromUnixTime(policy.leaseTermStartDate / 1000),
    leaseTermEndDate: fromUnixTime(policy.leaseTermEndDate / 1000),
    policyTermStartDate: fromUnixTime(policy.policyTermStartDate / 1000),
    policyTermEndDate: fromUnixTime(policy.policyTermEndDate / 1000),
  };
};

export const buildPoliciesFromResponse = (response: { policies?: Array<UnformattedPolicy>, totalResults: number }): Policies => {
  const formattedPolicies = response?.policies?.map((policy) => formatPolicy(policy)) || [];

  return {
    policies: formattedPolicies,
    totalResults: response.totalResults
  };
};
