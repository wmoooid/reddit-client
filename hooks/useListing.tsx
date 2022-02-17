import { fetcher } from '@/lib/fetcher';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function useListing(listingName: string) {
  const token = getCookie(`token`);
  const { data, error } = useSWR(
    [
      `https://oauth.reddit.com/${listingName}?raw_json=1`,
      {
        method: 'get',
        headers: { Authorization: `bearer ${token}` },
      },
    ],
    fetcher,
    {
      onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 401) {
          fetch('/api/reauth');
          revalidate;
        }
        if (error.status === 404) return;
        if (retryCount >= 10) return;
        setTimeout(() => revalidate({ retryCount }), 5000);
      },
    },
  );
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
}
