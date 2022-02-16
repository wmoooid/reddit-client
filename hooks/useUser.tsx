import { fetcher } from '@/lib/fetcher';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function useUser() {
  const token = getCookie(`token`);
  const { data, error } = useSWR(
    [
      'https://oauth.reddit.com/api/v1/me',
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
