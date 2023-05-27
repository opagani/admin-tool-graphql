import type { ResolverFn } from '../../types/ResolversFn';
import type {
  History,
  Policies,
  PolicySearchTypes,
  PolicyStatuses,
  QueryHistoryArgs,
  QuerySearchPoliciesArgs,
} from '../../../shared/generated-types/graphql';
import { searchPoliciesServices } from './services';

export type RentGuaranteeContext = {
  token: { 'rent-guaranteeUserToken': string; 'rent-guaranteeSessionToken': string };
};

export type SearchPoliciesResolver<Query> = ResolverFn<Query, RentGuaranteeContext>;

const searchPolicies: SearchPoliciesResolver<QuerySearchPoliciesArgs> = (
  _parent: unknown,
  { searchType, searchValue, pageSize, fromIndex, sortBy, sortDir }: QuerySearchPoliciesArgs,
  context: RentGuaranteeContext,
): Promise<Policies | null> => {
  return searchPoliciesServices.getSearchPolicies(
    searchType,
    searchValue,
    pageSize,
    fromIndex,
    sortBy,
    sortDir,
    context?.token?.['rent-guaranteeUserToken'] || '',
    context?.token?.['rent-guaranteeSessionToken'] || '',
  );
};

const history: SearchPoliciesResolver<QueryHistoryArgs> = (
  _parent: unknown,
  { logIdType, logIdValue }: QueryHistoryArgs,
  context: RentGuaranteeContext,
): Promise<History | null> => {
  return searchPoliciesServices.getHistory(
    logIdType,
    logIdValue,
    context?.token?.['rent-guaranteeUserToken'] || '',
    context?.token?.['rent-guaranteeSessionToken'] || '',
  );
};

const policySearchTypes: SearchPoliciesResolver<unknown> = (
  _parent: unknown,
  _vars: unknown,
  context: RentGuaranteeContext,
): Promise<PolicySearchTypes | null> => {
  return searchPoliciesServices.getPolicySearchTypes(
    context?.token?.['rent-guaranteeUserToken'] || '',
    context?.token?.['rent-guaranteeSessionToken'] || '',
  );
};

const policyStatuses: SearchPoliciesResolver<unknown> = (
  _parent: unknown,
  _vars: unknown,
  context: RentGuaranteeContext,
): Promise<PolicyStatuses | null> => {
  return searchPoliciesServices.getPolicyStatuses(
    context?.token?.['rent-guaranteeUserToken'] || '',
    context?.token?.['rent-guaranteeSessionToken'] || '',
  );
};

const searchPoliciesQueryResolvers = {
  searchPolicies,
  history,
  policySearchTypes,
  policyStatuses,
};

const searchPoliciesResolvers = {
  Query: searchPoliciesQueryResolvers,
};

export default searchPoliciesResolvers;
