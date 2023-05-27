import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import type { Landlords } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';

const getLandlordsDataForReports = async (
  methodToInvoke: string,
  urlParams: string | undefined | null,
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<Landlords | null> => {
  let url = `${process.env.API}/rent-guarantee/api/v1/admin/${methodToInvoke}`;
  if (urlParams && urlParams?.length > 0) {
    url = `${url}?${urlParams}`;
  }

  const response = await axios
    .get(`${url}`, {
      headers: {
        Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
      },
    })
    .then((res) => res.data.response)
    .catch((err) => {
      log.error(`Network error fetching Landlords ${methodToInvoke} report: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'landlordsReports failed', amount: 1 });
      return null;
    });

  if (response) {
    // Increment a count:
    await nodeMonitor.increment({ name: 'landlordsReports viewed', amount: 1 });
    return response;
  }

  return null;
};

export default tracer.wrap(getLandlordsDataForReports);
