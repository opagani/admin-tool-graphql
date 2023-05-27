import type { ResolverFn } from '../../types/ResolversFn';
import type {
  CancelPolicyResponse,
  HistoryForPolicyRelatedActions,
  MutationCancelPolicyArgs,
  MutationReinstateDroppedPolicyArgs,
  PolicyDetails,
  PremiumTransaction,
  PremiumTransactionFormattedChargeDateArgs,
  QueryExpandedPolicyDetailsArgs,
  QueryHistoryForPolicyRelatedActionsArgs,
  ReinstateDroppedPolicyResponse,
} from '../../../shared/generated-types/graphql';
import { policyDetailsServices } from './services';
import { utils } from '../utils/utils';

export type RentGuaranteeContext = {
  token: { 'rent-guaranteeUserToken': string; 'rent-guaranteeSessionToken': string };
};

export type PolicyResolver<Query> = ResolverFn<Query, RentGuaranteeContext>;

const expandedPolicyDetails: PolicyResolver<QueryExpandedPolicyDetailsArgs> = (
  _parent: unknown,
  { policyId }: QueryExpandedPolicyDetailsArgs,
  context: RentGuaranteeContext,
): Promise<PolicyDetails | null> => {
  return policyDetailsServices.getExpandedPolicyDetails(
    policyId,
    context?.token?.['rent-guaranteeUserToken'] || '',
    context?.token?.['rent-guaranteeSessionToken'] || '',
  );
};

const historyForPolicyRelatedActions: PolicyResolver<QueryHistoryForPolicyRelatedActionsArgs> = (
  _parent: unknown,
  { policyId }: QueryHistoryForPolicyRelatedActionsArgs,
  context: RentGuaranteeContext,
): Promise<HistoryForPolicyRelatedActions | null> => {
  return policyDetailsServices.getHistoryForPolicyRelatedActions(
    policyId,
    context?.token?.['rent-guaranteeUserToken'],
    context?.token?.['rent-guaranteeSessionToken'],
  );
};

const cancelPolicy: PolicyResolver<MutationCancelPolicyArgs> = (
  _parent: unknown,
  { policyId, caseNumber, note }: MutationCancelPolicyArgs,
  context: RentGuaranteeContext,
): Promise<CancelPolicyResponse | null> => {
  return policyDetailsServices.cancelPolicy(
    policyId,
    caseNumber,
    note,
    context?.token?.['rent-guaranteeUserToken'],
    context?.token?.['rent-guaranteeSessionToken'],
  );
};

const reinstateDroppedPolicy: PolicyResolver<MutationReinstateDroppedPolicyArgs> = (
  _parent: unknown,
  { policyId, caseNumber, note }: MutationReinstateDroppedPolicyArgs,
  context: RentGuaranteeContext,
): Promise<ReinstateDroppedPolicyResponse | null> => {
  return policyDetailsServices.reinstateDroppedPolicy(
    policyId,
    caseNumber,
    note,
    context?.token?.['rent-guaranteeUserToken'],
    context?.token?.['rent-guaranteeSessionToken'],
  );
};

const policyDetailsQueryResolvers = {
  expandedPolicyDetails,
  historyForPolicyRelatedActions,
};

const policyDetailsMutationResolvers = {
  cancelPolicy,
  reinstateDroppedPolicy,
};

const policyDetailsResolvers = {
  Query: policyDetailsQueryResolvers,
  PremiumTransaction: {
    formattedChargeDate: (premiumTransaction: PremiumTransaction, args: PremiumTransactionFormattedChargeDateArgs) => {
      const delimiter = args?.delimiter || '/';
      let cDate = '';
      let cTime = '';
      if (premiumTransaction?.chargeDate?.time && args.includeTime) {
        const chargeTime = premiumTransaction?.chargeDate?.time;
        cTime = utils.formatTime(chargeTime);
      }
      if (premiumTransaction?.chargeDate?.date) {
        const chargeDate = premiumTransaction?.chargeDate?.date;
        cDate = `${utils.formatDate(chargeDate, delimiter)} ${cTime}`;
      }
      return cDate;
    },
    formattedTransactionCreatedDate: (
      premiumTransaction: PremiumTransaction,
      args: PremiumTransactionFormattedChargeDateArgs,
    ) => {
      if (premiumTransaction?.transactionCreatedDate) {
        const delimiter = args?.delimiter || '/';
        return utils.formatDate(premiumTransaction?.transactionCreatedDate, delimiter);
      }
      return '';
    },
    formattedTransactionUpdatedDate: (
      premiumTransaction: PremiumTransaction,
      args: PremiumTransactionFormattedChargeDateArgs,
    ) => {
      if (premiumTransaction?.transactionUpdatedDate) {
        const delimiter = args?.delimiter || '/';
        return utils.formatDate(premiumTransaction?.transactionUpdatedDate, delimiter);
      }
      return '';
    },
  },
  Mutation: policyDetailsMutationResolvers,
};

export default policyDetailsResolvers;
