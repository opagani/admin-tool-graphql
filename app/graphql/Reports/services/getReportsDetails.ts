import axios from 'axios';
import { api } from '../../utils/api';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import type { Reports } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';

export const LANDLORD_REPORT_TYPE = 'landlord';
export const USER_ACTIVITY_REPORT_TYPE = 'userActivity';
// upcoming report type
export const ACCOUNTING_REPORT_TYPE = 'accounting';

const getReportsDetails = async (
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
  reportType: string,
): Promise<Reports | null> => {

  let reportEndpoint;
  switch (reportType) {
    case USER_ACTIVITY_REPORT_TYPE:
      reportEndpoint = api.gql.userActivityReports;
      break;
    default:
      reportEndpoint = api.gql.landlordReports;
  }
  const response = await axios
    .get(`${reportEndpoint}`, {
      headers: {
        Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
      },
    })
    .then((res) => res.data.response)
    .catch((err) => {
      log.error(`Network error fetching reports: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'getReportsDetails failed', amount: 1 });
      return null;
    });

  if (response) {
    // Increment a count:
    await nodeMonitor.increment({ name: 'getReportsDetails viewed', amount: 1 });
    return response;
  }

  return null;
};

export default tracer.wrap(getReportsDetails);
