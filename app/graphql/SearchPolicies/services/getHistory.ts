import type { LogIdType } from './../../../../shared/generated-types/graphql';
import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import { api } from '../../utils/api';
import type { History } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';

const getHistory = async (
  searchType: LogIdType,
  searchValue: string,
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<History | null> => {
  const response = await axios
    .get(`${api.gql.history}?logIdType=${searchType}&logIdValue=${searchValue}`, {
      headers: {
        Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
      },
    })
    .then((res) => res.data.response)
    .catch((err) => {
      log.error(`Network error fetching history for searchValue: ${searchValue}: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'getHistory failed', amount: 1 });
      return null;
    });

  // Increment a count:
  await nodeMonitor.increment({ name: 'getHistory viewed', amount: 1 });

  return response;
};

export default tracer.wrap(getHistory);
