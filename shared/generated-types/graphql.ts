export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: Date;
};

export type Activities = {
  __typename?: 'Activities';
  userActivities?: Maybe<Array<UserActivities>>;
};

export type Application = {
  __typename?: 'Application';
  id: Scalars['String'];
};

export type ApplicationActivity = {
  __typename?: 'ApplicationActivity';
  applicationId: Scalars['String'];
  incomeToRentEligible: Scalars['Boolean'];
  incomeUpdatedDate: Scalars['Float'];
  listingAlias: Scalars['String'];
  createdDate: Scalars['Float'];
  userToken: Scalars['String'];
};

export type ApplicationEligibility = {
  __typename?: 'ApplicationEligibility';
  applicationId?: Maybe<Scalars['String']>;
  applicationEligibilityStatus?: Maybe<Scalars['String']>;
};

export type CancelPolicyResponse = {
  __typename?: 'CancelPolicyResponse';
  success: Scalars['Boolean'];
  httpStatus: Scalars['Int'];
  error?: Maybe<ErrorResponse>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  message?: Maybe<Scalars['String']>;
};

export type History = {
  __typename?: 'History';
  logs: Array<Maybe<HistoryType>>;
};

export type HistoryForPolicyRelatedActions = {
  __typename?: 'HistoryForPolicyRelatedActions';
  logs: Array<Maybe<HistoryForPolicyRelatedActionsType>>;
};

export type HistoryForPolicyRelatedActionsType = {
  __typename?: 'HistoryForPolicyRelatedActionsType';
  policyId: Scalars['String'];
  action: Scalars['String'];
  createdDate: Scalars['Float'];
  message: Scalars['String'];
  source: Scalars['String'];
  sourceId: Scalars['String'];
};

export type HistoryType = {
  __typename?: 'HistoryType';
  idType: Scalars['String'];
  idValue: Scalars['String'];
  action: Scalars['String'];
  createdDate: Scalars['Float'];
  userToken: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type Landlord = {
  __typename?: 'Landlord';
  id?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
};

export type Landlords = {
  __typename?: 'Landlords';
  rentGuaranteeLandlords: Array<RentGuaranteeLandLordObject>;
};

export type Lease = {
  __typename?: 'Lease';
  endDate?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['Int']>;
  monthlyRentUsd?: Maybe<Scalars['Int']>;
  securityDeposit?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['Date']>;
};

export type LeaseLockBinder = {
  __typename?: 'LeaseLockBinder';
  id: Scalars['String'];
  issueDate: LocalDateType;
  effectiveDate?: Maybe<LocalDateType>;
  expirationDate?: Maybe<LocalDateType>;
  cancelDate?: Maybe<LocalDateType>;
  binderStatus: Scalars['String'];
};

export type LeaseLockCertificate = {
  __typename?: 'LeaseLockCertificate';
  id: Scalars['String'];
  issueDate: LocalDateType;
  effectiveDate?: Maybe<LocalDateType>;
  expirationDate?: Maybe<LocalDateType>;
  cancelDate?: Maybe<LocalDateType>;
  certificateStatus: Scalars['String'];
};

export type ListingActivity = UserActionActivity & {
  __typename?: 'ListingActivity';
  idType: Scalars['String'];
  idValue: Scalars['String'];
  action: Scalars['String'];
  createdDate: Scalars['Float'];
  userToken: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type LocalDateTimeType = {
  __typename?: 'LocalDateTimeType';
  date?: Maybe<LocalDateType>;
  time?: Maybe<TimeType>;
};

export type LocalDateType = {
  __typename?: 'LocalDateType';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  day?: Maybe<Scalars['Int']>;
};

export enum LogIdType {
  ListingAlias = 'listingAlias',
  UserToken = 'userToken',
}

export type MethodParamsDetails = {
  __typename?: 'MethodParamsDetails';
  paramName: Scalars['String'];
  paramDataType: Scalars['String'];
  paramDefaultValue: Scalars['Int'];
};

export type MonthlyPremiumPayments = {
  __typename?: 'MonthlyPremiumPayments';
  sequenceNumber: Scalars['Int'];
  invoiceDate: Scalars['String'];
  totalDueAmount: Scalars['Float'];
  premiumAmount: Scalars['Float'];
  stampingFeeAmount?: Maybe<Scalars['Float']>;
  surplusLinesTaxAmount?: Maybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  cancelPolicy?: Maybe<CancelPolicyResponse>;
  reinstateDroppedPolicy?: Maybe<ReinstateDroppedPolicyResponse>;
};

export type MutationCancelPolicyArgs = {
  policyId: Scalars['String'];
  caseNumber: Scalars['String'];
  note: Scalars['String'];
};

export type MutationReinstateDroppedPolicyArgs = {
  policyId: Scalars['String'];
  caseNumber: Scalars['String'];
  note: Scalars['String'];
};

export enum PaymentChargeStatus {
  Failed = 'FAILED',
  Other = 'OTHER',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Disputed = 'DISPUTED',
  Succeeded = 'SUCCEEDED',
  Unknown = 'UNKNOWN',
}

export enum PaymentPayoutStatus {
  Paid = 'PAID',
  Pending = 'PENDING',
  InTransit = 'IN_TRANSIT',
  Canceled = 'CANCELED',
  Failed = 'FAILED',
  Unknown = 'UNKNOWN',
}

export type Payments = {
  __typename?: 'Payments';
  daysDelinquent?: Maybe<Scalars['Int']>;
  finalExpectedPaymentDate?: Maybe<LocalDateType>;
  firstExpectedPaymentDate?: Maybe<LocalDateType>;
  firstSuccessfulPaymentDate?: Maybe<LocalDateType>;
  id?: Maybe<Scalars['Int']>;
  mostRecentSuccessfulPaymentDate?: Maybe<LocalDateType>;
  rentTermsCancelledDate?: Maybe<LocalDateType>;
  termType?: Maybe<Scalars['String']>;
};

export type Policies = {
  __typename?: 'Policies';
  policies: Array<Maybe<Policy>>;
  totalResults: Scalars['Int'];
};

export type Policy = {
  __typename?: 'Policy';
  createdDate: Scalars['Float'];
  updatedDate: Scalars['Float'];
  listingAlias: Scalars['String'];
  isActive: Scalars['Boolean'];
  policyStatus: Scalars['String'];
  applicationId: Application;
  leaseId: Lease;
  paymentId?: Maybe<Payments>;
  policyId: Scalars['String'];
  leaseTermStartDate?: Maybe<Scalars['Date']>;
  leaseTermEndDate?: Maybe<Scalars['Date']>;
  policyTermStartDate?: Maybe<Scalars['Date']>;
  policyTermEndDate?: Maybe<Scalars['Date']>;
  landlordUserToken?: Maybe<Scalars['String']>;
  renterIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type PolicyDetails = {
  __typename?: 'PolicyDetails';
  policyId: Scalars['String'];
  property?: Maybe<Property>;
  lease?: Maybe<Lease>;
  payments?: Maybe<Payments>;
  landlords: Array<Landlord>;
  applicationEligibility: ApplicationEligibility;
  renters: Array<Renter>;
  leaseLockBinder?: Maybe<LeaseLockBinder>;
  leaseLockCertificate?: Maybe<LeaseLockCertificate>;
  quote?: Maybe<Quote>;
  premiumTransactions?: Maybe<Array<Maybe<PremiumTransaction>>>;
  policyStatus?: Maybe<Scalars['String']>;
  isCancellable: Scalars['Boolean'];
  isEligibleToReinstate: Scalars['Boolean'];
  monthlyPremiumPayments?: Maybe<Array<Maybe<MonthlyPremiumPayments>>>;
};

export type PolicySearchType = {
  __typename?: 'PolicySearchType';
  value: Scalars['String'];
  displayName: Scalars['String'];
};

export type PolicySearchTypes = {
  __typename?: 'PolicySearchTypes';
  values: Array<PolicySearchType>;
};

export type PolicyStatus = {
  __typename?: 'PolicyStatus';
  value: Scalars['String'];
  displayName: Scalars['String'];
};

export type PolicyStatuses = {
  __typename?: 'PolicyStatuses';
  values: Array<PolicyStatus>;
};

export enum PremiumPaidBy {
  Passthrough = 'PASSTHROUGH',
  Direct = 'DIRECT',
}

export type PremiumTransaction = {
  __typename?: 'PremiumTransaction';
  transactionId?: Maybe<Scalars['String']>;
  transactionType?: Maybe<PremiumPaidBy>;
  premiumAmountInCents?: Maybe<Scalars['Float']>;
  transactionCreatedDate?: Maybe<LocalDateType>;
  transactionUpdatedDate?: Maybe<LocalDateType>;
  chargeId?: Maybe<Scalars['String']>;
  chargeStatus?: Maybe<PaymentChargeStatus>;
  chargeDate?: Maybe<LocalDateTimeType>;
  payoutStatus?: Maybe<PaymentPayoutStatus>;
  formattedChargeDate?: Maybe<Scalars['String']>;
  formattedTransactionCreatedDate?: Maybe<Scalars['String']>;
  formattedTransactionUpdatedDate?: Maybe<Scalars['String']>;
};

export type PremiumTransactionFormattedChargeDateArgs = {
  delimiter?: Maybe<Scalars['String']>;
  includeTime?: Maybe<Scalars['Boolean']>;
};

export type PremiumTransactionFormattedTransactionCreatedDateArgs = {
  delimiter?: Maybe<Scalars['String']>;
};

export type PremiumTransactionFormattedTransactionUpdatedDateArgs = {
  delimiter?: Maybe<Scalars['String']>;
};

export type Property = {
  __typename?: 'Property';
  listingAlias: Scalars['String'];
  street: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  expandedPolicyDetails?: Maybe<PolicyDetails>;
  history?: Maybe<History>;
  historyForPolicyRelatedActions?: Maybe<HistoryForPolicyRelatedActions>;
  landlordsDataForReports?: Maybe<Landlords>;
  policySearchTypes?: Maybe<PolicySearchTypes>;
  policyStatuses?: Maybe<PolicyStatuses>;
  reports?: Maybe<Reports>;
  searchPolicies?: Maybe<Policies>;
  userActivityDataForReports?: Maybe<Activities>;
};

export type QueryExpandedPolicyDetailsArgs = {
  policyId: Scalars['String'];
};

export type QueryHistoryArgs = {
  logIdType: LogIdType;
  logIdValue: Scalars['String'];
};

export type QueryHistoryForPolicyRelatedActionsArgs = {
  policyId: Scalars['String'];
};

export type QueryLandlordsDataForReportsArgs = {
  methodToInvoke: Scalars['String'];
  urlParams?: Maybe<Scalars['String']>;
};

export type QueryReportsArgs = {
  reportType?: Maybe<Scalars['String']>;
};

export type QuerySearchPoliciesArgs = {
  searchType: Scalars['String'];
  searchValue: Scalars['String'];
  pageSize: Scalars['Int'];
  fromIndex: Scalars['Int'];
  sortBy?: Maybe<SortBy>;
  sortDir?: Maybe<SortDir>;
};

export type QueryUserActivityDataForReportsArgs = {
  methodToInvoke: Scalars['String'];
  urlParams?: Maybe<Array<UrlParams>>;
};

export type Quote = {
  __typename?: 'Quote';
  quoteId: Scalars['Float'];
  premium?: Maybe<Scalars['Float']>;
  coverage?: Maybe<Scalars['Float']>;
  firstMonthStampingFee?: Maybe<Scalars['Float']>;
  firstMonthSurplusLines?: Maybe<Scalars['Float']>;
  firstMonthTotal?: Maybe<Scalars['Float']>;
  recurringMonthSurplusLines?: Maybe<Scalars['Float']>;
  recurringMonthTotal?: Maybe<Scalars['Float']>;
};

export type ReinstateDroppedPolicyResponse = {
  __typename?: 'ReinstateDroppedPolicyResponse';
  success: Scalars['Boolean'];
  httpStatus: Scalars['Int'];
  error?: Maybe<ErrorResponse>;
};

export type Renter = {
  __typename?: 'Renter';
  renterId?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  creditCheckEligibleFlag?: Maybe<Scalars['Boolean']>;
  incomeToRentEligibleFlag?: Maybe<Scalars['Boolean']>;
};

export type RentGuaranteeLandLord = {
  __typename?: 'RentGuaranteeLandLord';
  landlordUserToken: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type RentGuaranteeLandLordObject = {
  __typename?: 'RentGuaranteeLandLordObject';
  landlord?: Maybe<RentGuaranteeLandLord>;
};

export type Report = {
  __typename?: 'Report';
  reportName: Scalars['String'];
  reportDescription: Scalars['String'];
  methodToInvoke: Scalars['String'];
  methodParamsDetails?: Maybe<Array<Maybe<MethodParamsDetails>>>;
};

export type Reports = {
  __typename?: 'Reports';
  reportsDetails: Array<Report>;
};

export enum SortBy {
  CreatedDate = 'createdDate',
  UpdatedDate = 'updatedDate',
  PolicyStartDate = 'policyStartDate',
  PolicyEndDate = 'policyEndDate',
}

export enum SortDir {
  Asc = 'asc',
  Desc = 'desc',
}

export type TimeType = {
  __typename?: 'TimeType';
  hour?: Maybe<Scalars['Int']>;
  minute?: Maybe<Scalars['Int']>;
  second?: Maybe<Scalars['Int']>;
  nano?: Maybe<Scalars['Int']>;
};

export type UrlParams = {
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type UserActionActivity = {
  idType: Scalars['String'];
  idValue: Scalars['String'];
  action: Scalars['String'];
  createdDate: Scalars['Float'];
  userToken: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type UserActivities = UserActivity | ListingActivity | ApplicationActivity | VoucherActivity;

export type UserActivity = UserActionActivity & {
  __typename?: 'UserActivity';
  idType: Scalars['String'];
  idValue: Scalars['String'];
  action: Scalars['String'];
  createdDate: Scalars['Float'];
  userToken: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type VoucherActivity = {
  __typename?: 'VoucherActivity';
  applicationId: Scalars['String'];
  voucherToRentCoverage: Scalars['String'];
  listingAlias: Scalars['String'];
  createdDate: Scalars['Float'];
  updatedDate: Scalars['Float'];
  userToken: Scalars['String'];
};
