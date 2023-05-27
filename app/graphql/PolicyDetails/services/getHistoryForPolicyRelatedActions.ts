import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import { api } from '../../utils/api';
import type { HistoryForPolicyRelatedActions } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';

const getHistoryForPolicyRelatedActions = async (
  policyId: string,
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<HistoryForPolicyRelatedActions | null> => {
  const response = await axios
    .get(`${api.gql.historyForPolicyRelatedActions}?policyId=${policyId}`, {
      headers: {
        Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
      },
    })
    .then((res) => res.data.response)
    .catch((err) => {
      log.error(`Network error fetching history for policy related actions for for policyId: ${policyId}: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'getHistoryForPolicyRelatedActions failed', amount: 1 });
      return null;
    });

  if (response) {
    // Increment a count:
    await nodeMonitor.increment({ name: 'getHistoryForPolicyRelatedActions viewed', amount: 1 });
    return response;
  }

  return null;
};

export default tracer.wrap(getHistoryForPolicyRelatedActions);
