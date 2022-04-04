import { useMemo } from 'react';
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';

import qs from 'qs';

// Hook
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      // Convert string to object
      params,
      query: qs.parse(location.search, { ignoreQueryPrefix: true }),
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
}

export function useQuery<T = Record<string, string>>(keys: string | string[]) {
  const location = useLocation();

  if (!Array.isArray(keys)) keys = [keys];

  const queries = qs.parse(location.search, { ignoreQueryPrefix: true });

  return keys.reduce((obj: object, key: string) => {
    const query = queries[key];

    // @ts-ignore
    obj[key] = Array.isArray(query) ? query[0].toString() : query?.toString();

    return obj;
  }, {}) as T;
}
