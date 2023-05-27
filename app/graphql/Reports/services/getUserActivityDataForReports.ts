import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import type {
  Activities,
  ApplicationActivity,
  ListingActivity,
  Maybe,
  UrlParams,
  UserActivity,
  VoucherActivity,
} from '../../../../shared/generated-types/graphql';
import type { QueryParams } from '../../../graphql/utils/utils';
import { utils } from '../../../graphql/utils/utils';
import nodeMonitor from '../../../server/utils/nodeMonitor';

const getUserActivityDataForReports = async (
  methodToInvoke: string,
  urlParams: Maybe<Array<Maybe<UrlParams>>>,
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<Activities | null> => {
  const url = `${process.env.API}/rent-guarantee/api/v1/admin/${methodToInvoke}`;
  const queryParams: QueryParams = utils.generateQueryParams(urlParams);
  const response = await axios
    .get(`${url}`, {
      params: queryParams,
      headers: {
        Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
      },
    })
    .then((res): Activities | null => {
      switch (methodToInvoke) {
        case 'getUserActivityAllEvents':
        case 'getUserActivityOptIns':
          if (res) {
            return {
              __typename: 'Activities',
              userActivities: convertToUserActivity(res?.data?.data?.logs || []),
            };
          }
          return null;
        case 'getApplicationFlagsUserActivityEvents':
          if (res) {
            return {
              __typename: 'Activities',
              userActivities: convertToApplicationActivity(res?.data?.data?.applicationFlagsUserActivity || []),
            };
          }
          return null;
        case 'getRentVoucherCoverageUserActivityEvents':
          if (res) {
            return {
              __typename: 'Activities',
              userActivities: convertToVoucherActivity(res?.data?.data?.rentVoucherCoverageUserActivity || []),
            };
          }
          return null;
        default:
          return null;
      }
    })
    .catch((err) => {
      log.error(`Network error fetching user activity ${methodToInvoke} report: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'userActivityReports failed', amount: 1 });
      return null;
    });

  if (response) {
    // Increment a count:
    await nodeMonitor.increment({ name: 'userActivityReports viewed', amount: 1 });
    return response;
  }

  return null;
};

const convertToUserActivity = (
  activities: Array<UserActivity | ListingActivity>,
): Array<UserActivity | ListingActivity> => {
  return activities.map((activity: UserActivity | ListingActivity): UserActivity | ListingActivity => {
    return { ...activity, __typename: activity.idType == 'listingAlias' ? 'ListingActivity' : 'UserActivity' };
  });
};

const convertToApplicationActivity = (activities: Array<ApplicationActivity>): Array<ApplicationActivity> => {
  return activities.map((activity: ApplicationActivity): ApplicationActivity => {
    return { ...activity, __typename: 'ApplicationActivity' };
  });
};

const convertToVoucherActivity = (activities: Array<VoucherActivity>): Array<VoucherActivity> => {
  return activities.map((activity: VoucherActivity): VoucherActivity => {
    return { ...activity, __typename: 'VoucherActivity' };
  });
};

export default tracer.wrap(getUserActivityDataForReports);
