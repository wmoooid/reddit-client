import { BASE_URL, fetcher } from '@/lib/fetcher';
import { ListingsResponseChildrenType } from '@/types/listings';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function useListing(listingName: string) {
  const token = getCookie(`token`);

  const GET_PARAMS = {
    method: 'get',
    headers: { Authorization: `bearer ${token}` },
  };

  const URL_PARAMS = new URLSearchParams({
    raw_json: '1',
    limit: '10',
  });

  const { data, error } = useSWR([`${BASE_URL}${listingName}?${URL_PARAMS}`, GET_PARAMS], fetcher);

  const posts: ListingsResponseChildrenType[] = data?.data?.children || [];

  return {
    posts: posts,
    isLoading: !error && !data,
    isError: error,
  };
}
