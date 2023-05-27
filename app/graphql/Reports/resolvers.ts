import type { ResolverFn } from '../../types/ResolversFn';
import type {
  Landlords,
  QueryLandlordsDataForReportsArgs,
  QueryReportsArgs,
  Reports,
  UserActivities,
} from '../../../shared/generated-types/graphql';
import { reportsServices } from './services';
import type { QueryUserActivityDataForReportsArgs } from '../../../shared/generated-types/graphql';

export type RentGuaranteeContext = {
  token: { 'rent-guaranteeUserToken': string; 'rent-guaranteeSessionToken': string };
};

export type ReportResolver<Query> = ResolverFn<Query, RentGuaranteeContext>;

const reports: ReportResolver<QueryReportsArgs> = (
  _parent: unknown,
  { reportType }: QueryReportsArgs,
  context: RentGuaranteeContext,
): Promise<Reports | null | unknown> => {
  return reportsServices.getReportsDetails(
    context?.token?.['rent-guaranteeUserToken'] || '',
    context?.token?.['rent-guaranteeSessionToken'] || '',
    reportType || '',
  );
};

const landlordsDataForReports: ReportResolver<QueryLandlordsDataForReportsArgs> = (
  _parent: unknown,
  { methodToInvoke, urlParams }: QueryLandlordsDataForReportsArgs,
  context: RentGuaranteeContext,
): Promise<Landlords | null | unknown> => {
  return reportsServices.getLandlordsDataForReports(
    methodToInvoke,
    urlParams,
    context?.token?.['rent-guaranteeUserToken'] || '',
    context?.token?.['rent-guaranteeSessionToken'] || '',
  );
};

const userActivityDataForReports: ReportResolver<QueryUserActivityDataForReportsArgs> = (
  _parent: unknown,
  { methodToInvoke, urlParams }: QueryUserActivityDataForReportsArgs,
  context: RentGuaranteeContext,
): Promise<UserActivities | null | unknown> => {
  return reportsServices.getUserActivityDataForReports(
    methodToInvoke,
    urlParams || null,
    context?.token?.['rent-guaranteeUserToken'] || '',
    context?.token?.['rent-guaranteeSessionToken'] || '',
  );
};

const reportsQueryResolvers = {
  reports,
  landlordsDataForReports,
  userActivityDataForReports,
};

const reportsResolvers = {
  Query: reportsQueryResolvers,
};

export default reportsResolvers;
