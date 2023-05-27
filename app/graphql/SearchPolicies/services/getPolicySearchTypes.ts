import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import { api } from '../../utils/api';
import type { PolicySearchTypes } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';

const getPolicySearchTypes = async (
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<PolicySearchTypes | null> => {
  const response = await axios
    .get(`${api.gql.policySearchTypes}`, {
      headers: {
        Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
      },
    })
    .then((res) => res.data.response)
    .catch((err) => {
      log.error(`Network error fetching policy for policy search types: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'getPolicySearchTypes failed', amount: 1 });
      return null;
    });

  if (response) {
    // Increment a count:
    await nodeMonitor.increment({ name: 'getPolicySearchTypes viewed', amount: 1 });
    return response;
  }

  return null;
};

export default tracer.wrap(getPolicySearchTypes);
