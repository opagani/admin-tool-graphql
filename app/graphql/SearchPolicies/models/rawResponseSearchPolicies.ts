import type { Maybe, Scalars } from '../../../../shared/generated-types/graphql';

export type RawResponseSearchPolicies = {
  policies: Array<Maybe<RawResponsePolicy>>;
  totalResults: Scalars['Int'];
};

export type RawResponsePolicy = {
  createdDate: Scalars['Float'];
  updatedDate: Scalars['Float'];
  listingAlias: Scalars['String'];
  isActive: Scalars['Boolean'];
  policyStatus: Scalars['String'];
  applicationId: Scalars['String'];
  leaseId: Scalars['Int'];
  paymentId?: Scalars['Int'];
  policyId: Scalars['String'];
  leaseTermStartDate?: Maybe<Scalars['Float']>;
  leaseTermEndDate?: Maybe<Scalars['Float']>;
  policyTermStartDate?: Maybe<Scalars['Float']>;
  policyTermEndDate?: Maybe<Scalars['Float']>;
  landlordUserToken?: Maybe<Scalars['String']>;
  renterIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  premiumAmount: Maybe<Scalars['Int']>;
  orderToPurchaseSigned: Scalars['Boolean'];
};
