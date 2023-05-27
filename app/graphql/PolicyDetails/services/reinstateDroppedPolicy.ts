import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import { api } from '../../utils/api';
import type { ReinstateDroppedPolicyResponse } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';

const reinstateDroppedPolicy = async (
  policyId: string,
  caseNumber: string,
  note: string,
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<ReinstateDroppedPolicyResponse | null> => {
  return await axios
    .post(
      `${api.gql.reinstateDroppedPolicy}`,
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
    .then(async (res) => {
      log.error(res.data);
      await nodeMonitor.increment({ name: 'reinstateDroppedPolicy viewed', amount: 1 });
      return res.data;
    })
    .catch(async (err) => {
      const errMsg = `Error reinstating dropped policy for policyId: ${policyId}: ${err}`;
      log.error(errMsg);
      // Log an error (using the class instance's logger):
      await nodeMonitor.increment({ name: 'reinstateDroppedPolicy failed', amount: 1 });
      throw new Error(errMsg);
    });
};

export default tracer.wrap(reinstateDroppedPolicy);
