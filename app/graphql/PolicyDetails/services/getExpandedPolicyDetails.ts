import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import { api } from '../../utils/api';
import type { PolicyDetails } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';
import { fromUnixTime } from 'date-fns';

const getExpandedPolicyDetails = async (
  policyId: string,
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<PolicyDetails | null> => {
  const response = await axios
    .get(`${api.gql.expandedPolicyDetails}?policyId=${policyId}`, {
      headers: {
        Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
      },
    })
    .then((res) => {
      const policy = res.data.response;
      if (policy?.lease) {
        policy.lease.startDate = fromUnixTime(policy.lease.startDate / 1000);
        policy.lease.endDate = fromUnixTime(policy.lease.endDate / 1000);
      }
      return policy;
    })
    .catch((err) => {
      log.error(`Network error fetching policy for policyId: ${policyId}: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'getExpandedPolicyDetails failed', amount: 1 });
      return null;
    });

  if (response) {
    // Increment a count:
    await nodeMonitor.increment({ name: 'getExpandedPolicyDetails viewed', amount: 1 });
    return response;
  }

  return null;
};

export default tracer.wrap(getExpandedPolicyDetails);
