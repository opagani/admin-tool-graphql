import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import { api } from '../../utils/api';
import type { PolicyStatuses } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';

const getPolicyStatuses = async (
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<PolicyStatuses | null> => {
  const response = await axios
    .get(`${api.gql.policyStatuses}`, {
      headers: {
        Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
      },
    })
    .then((res) => res.data.response)
    .catch((err) => {
      log.error(`Network error fetching policy statuses search types: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'getPolicyStatuses failed', amount: 1 });
      return null;
    });

  if (response) {
    // Increment a count:
    await nodeMonitor.increment({ name: 'getPolicyStatuses viewed', amount: 1 });
    return response;
  }

  return null;
};

export default tracer.wrap(getPolicyStatuses);
