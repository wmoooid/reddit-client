import { fetcher, SWR_OPTIONS } from '@/lib/fetcher';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function useMe() {
  const token = getCookie(`token`);
  const { data, error } = useSWR(
    [
      'https://oauth.reddit.com/api/v1/me?raw_json=1',
      {
        method: 'get',
        headers: { Authorization: `bearer ${token}` },
      },
    ],
    fetcher,
    SWR_OPTIONS,
  );

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
