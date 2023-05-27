import { buildFederatedSchema } from '@apollo/federation';
import gql from 'graphql-tag';
import resolvers from './resolvers';
import schema from './schema';

const federatedSchema = buildFederatedSchema({
  typeDefs: gql`
    ${schema}
  `,
  resolvers,
});

export default federatedSchema;
