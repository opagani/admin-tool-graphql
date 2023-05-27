import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import { api } from '../../utils/api';
import type { CancelPolicyResponse } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';

const cancelPolicy = async (
  policyId: string,
  caseNumber: string,
  note: string,
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<CancelPolicyResponse | null> => {
  const response = await axios
    .post(
      `${api.gql.cancelPolicy}`,
      {
        policyId: policyId,
        caseNumber: caseNumber,
        note: note,
      },
      {
        headers: {
          Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
        },
      },
    )
    .then((res) => res.data)
    .catch((err) => {
      log.error(`Network error cancelling policy for policyId: ${policyId}: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'cancelPolicy failed', amount: 1 });
      return null;
    });

  if (response) {
    // Increment a count:
    await nodeMonitor.increment({ name: 'cancelPolicy viewed', amount: 1 });
    return response;
  }

  return null;
};

export default tracer.wrap(cancelPolicy);
