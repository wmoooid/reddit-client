import { BASE_URL, fetcher, URL_PARAMS } from '@/lib/fetcher';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function useMe() {
  const token = getCookie(`token`);

  const { data, error } = useSWR(
    [
      `${BASE_URL}/api/v1/me?${URL_PARAMS}`,
      {
        method: 'get',
        headers: { Authorization: `bearer ${token}` },
      },
    ],
    fetcher,
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
