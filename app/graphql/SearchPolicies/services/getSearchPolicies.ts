import axios from 'axios';
import log from '../../../server/utils/log';
import { tracer } from '../../../server/utils/tracer';
import { api } from '../../utils/api';
import { buildPoliciesFromResponse } from '../PoliciesBuilder';
import type { Policies } from '../../../../shared/generated-types/graphql';
import nodeMonitor from '../../../server/utils/nodeMonitor';
import type { Maybe, SortBy, SortDir } from '../../../../shared/generated-types/graphql';

const getSearchPolicies = async (
  searchType: string,
  searchValue: string,
  pageSize: number,
  fromIndex: number,
  sortBy: Maybe<SortBy> | undefined,
  sortDir: Maybe<SortDir> | undefined,
  rentGuaranteeUserToken: string,
  rentGuaranteeSessionToken: string,
): Promise<Policies | null> => {
  const queryObj: Array<Array<string>> | Record<string, string> = {
    searchType,
    searchValue,
    pageSize: JSON.stringify(pageSize),
    fromIndex: JSON.stringify(fromIndex),
  };

  const params = new URLSearchParams(queryObj);
  if (sortBy) {
    params.append('sortBy', sortBy);
  }
  if (sortDir) {
    params.append('sortDir', sortDir);
  }
  const response = await axios
    .get(`${api.gql.searchPolicies}?${params.toString()}`, {
      headers: {
        Cookie: `rent-guaranteeUserToken=${rentGuaranteeUserToken}; rent-guaranteeSessionToken=${rentGuaranteeSessionToken}`,
      },
    })
    .then((res) => res.data.response)
    .catch((err) => {
      log.error(`Network error fetching policy for ${searchType}: ${searchValue}: ${err}`);
      // Log an error (using the class instance's logger):
      nodeMonitor.increment({ name: 'getSearchPolicies failed', amount: 1 });
      return null;
    });

  if (response) {
    // Increment a count:
    await nodeMonitor.increment({ name: 'getSearchPolicies viewed', amount: 1 });
    return buildPoliciesFromResponse(response);
  }

  return null;
};

export default tracer.wrap(getSearchPolicies);
