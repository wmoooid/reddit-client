import { BASE_URL, fetcher, SWR_OPTIONS, URL_PARAMS } from '@/lib/fetcher';
import { ListingsResponseChildrenType } from '@/types/listings';
import { getCookie } from 'cookies-next';
import useSWRInfinite, { SWRInfiniteKeyLoader } from 'swr/infinite';

export default function useInfiniteListing(listing: string) {
  const TOKEN = getCookie(`token`);

  const GET_PARAMS = {
    method: 'get',
    headers: { Authorization: `bearer ${TOKEN}` },
  };

  const getKey: SWRInfiniteKeyLoader = (pageIndex, previousPageData) => {
    if (pageIndex === 0) return [`${BASE_URL}${listing}?${URL_PARAMS}`, GET_PARAMS];

    return [`${BASE_URL}${listing}?${URL_PARAMS}&after=${previousPageData.data.after}`, GET_PARAMS];
  };

  const { data, error, isValidating, mutate, size, setSize } = useSWRInfinite(getKey, fetcher, SWR_OPTIONS);

  const posts: ListingsResponseChildrenType[] = [];

  data?.forEach((chunk) => {
    posts.push(...chunk.data.children);
  });

  return {
    posts: posts,
    isLoading: !error && !data,
    isValidating: isValidating,
    isError: error,
    size: size,
    setSize: setSize,
    mutate: mutate,
  };
}
