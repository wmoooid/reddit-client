import { BASE_URL, fetcher } from '@/lib/fetcher';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function useUser(userId: string) {
  const token = getCookie(`token`);

  const URL_PARAMS = new URLSearchParams({
    raw_json: '1',
  });

  const { data, error } = useSWR(
    [
      `${BASE_URL}/user/${userId}/about?${URL_PARAMS}`,
      {
        method: 'get',
        headers: { Authorization: `bearer ${token}` },
      },
    ],
    fetcher,
    { shouldRetryOnError: false },
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
