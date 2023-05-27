//resolvers
import searchPoliciesResolvers from './SearchPolicies/resolvers';
import policyDetailsResolvers from './PolicyDetails/resolvers';
import reportsResolvers from './Reports/resolvers';
import { DateResolver } from 'graphql-scalars';

//typedefs
import searchPoliciesSchema from './SearchPolicies/schema.graphql';
import policyDetailsSchema from './PolicyDetails/schema.graphql';
import reportsSchema from './Reports/schema.graphql';
import { DateTypeDefinition } from 'graphql-scalars';

export const mergedResolvers = {
  searchPoliciesResolvers,
  policyDetailsResolvers,
  reportsResolvers,
  DateResolver,
};

export const mergedSchema = {
  searchPoliciesSchema,
  policyDetailsSchema,
  reportsSchema,
  DateTypeDefinition,
};
