export const makePath = (path: string, proxyPath?: string): string => {
  if (proxyPath) {
    return `${proxyPath}/${path}`;
  }

  return `${path}`;
};

export const api = {
  gql: {
    searchPolicies: `${process.env.API}/rent-guarantee/api/v1/admin/searchPolicies`,
    history: `${process.env.API}/rent-guarantee/api/v1/admin/getActionLogs`,
    policySearchTypes: `${process.env.API}/rent-guarantee/api/v1/admin/getPolicySearchTypes`,
    policyStatuses: `${process.env.API}/rent-guarantee/api/v1/admin/getPolicyStatuses`,
    expandedPolicyDetails: `${process.env.API}/rent-guarantee/api/v1/admin/getExpandedPolicyDetails`,
    historyForPolicyRelatedActions: `${process.env.API}/rent-guarantee/api/v1/admin/getPolicyActionLogs`,
    cancelPolicy: `${process.env.API}/rent-guarantee/api/v1/admin/cancelPolicy`,
    reinstateDroppedPolicy: `${process.env.API}/rent-guarantee/api/v1/admin/reinstateDroppedPolicy`,
    landlordReports: `${process.env.API}/rent-guarantee/api/v1/admin/getReportsDetails`,
    userActivityReports: `${process.env.API}/rent-guarantee/api/v1/admin/getUserActivityReportsDetails`,
  },
};
