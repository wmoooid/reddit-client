import { BASE_URL, fetcher } from '@/lib/fetcher';
import { SearchResponse } from '@/types/search';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function useSearch(query: string) {
  const token = getCookie(`token`);

  const URL_PARAMS = new URLSearchParams({
    raw_json: '1',
    query: query,
  });

  const { data, error } = useSWR(
    [
      `${BASE_URL}/api/search_subreddits?${URL_PARAMS}`,
      {
        method: 'POST',
        headers: { Authorization: `bearer ${token}` },
      },
    ],
    fetcher,
  );

  const list: SearchResponse = data?.subreddits || [];

  return {
    list: list,
    isLoading: !error && !data,
    isError: error,
  };
}
