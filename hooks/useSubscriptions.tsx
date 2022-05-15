import { BASE_URL, fetcher, URL_PARAMS } from '@/lib/fetcher';
import { SubscriptionsResponseChildren } from '@/types/subscriptions';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function useSubscriptions() {
  const token = getCookie(`token`);

  const { data, error } = useSWR(
    [
      `${BASE_URL}/subreddits/mine/subscriber?${URL_PARAMS}`,
      {
        method: 'get',
        headers: { Authorization: `bearer ${token}` },
      },
    ],
    fetcher,
  );

  const subscriptions: SubscriptionsResponseChildren[] = data?.data?.children || [];
  return {
    subscriptions: subscriptions,
    isLoading: !error && !data,
    isError: error,
  };
}
