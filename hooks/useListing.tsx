import { fetcher } from '@/lib/fetcher';
import { ListingsResponseChildrenType } from '@/types/listings';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function useListing(listingName: string) {
  const token = getCookie(`token`);
  const { data, error } = useSWR(
    [
      `https://oauth.reddit.com/${listingName}?raw_json=1&limit=10`,
      {
        method: 'get',
        headers: { Authorization: `bearer ${token}` },
      },
    ],
    fetcher,
    {
      onErrorRetry: async (error, key, config, revalidate, { retryCount }) => {
        if (error.status === 400) return;
        if (error.status === 401) {
          const res = await fetch('/api/reauth');
          console.log(res.status);
          if (res.status === 200) {
            revalidate();
          } else return;
        }
        if (error.status === 404) return;
      },
    },
  );
  const posts: ListingsResponseChildrenType[] = data?.data?.children || [];
  return {
    posts: posts,
    isLoading: !error && !data,
    isError: error,
  };
}
