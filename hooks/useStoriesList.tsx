import { BASE_URL } from '@/lib/fetcher';
import { ListingResposeRootType } from '@/types/listings';
import { SubscriptionsResponseChildren } from '@/types/subscriptions';
import { getCookie } from 'cookies-next';
import React from 'react';
import useSubscriptions from './useSubscriptions';

export default function useStoriesList() {
  const [list, setList] = React.useState<Array<SubscriptionsResponseChildren>>([]);
  const { subscriptions } = useSubscriptions();
  const token = getCookie(`token`);
  const URL_PARAMS = new URLSearchParams({
    raw_json: '1',
    limit: '10',
  });
  const GET_PARAMS = {
    method: 'get',
    headers: { Authorization: `bearer ${token}` },
  };

  React.useEffect(() => {
    (async () => {
      const ListingsWithVideo = new Set();
      await Promise.all(
        subscriptions.map(async (subscription) => {
          const res = await fetch(`${BASE_URL}${subscription.data.url}?${URL_PARAMS}`, GET_PARAMS);
          const data: ListingResposeRootType = await res.json();
          data.data.children.map((item) => (item.data.is_video ? ListingsWithVideo.add(subscription.data.url) : () => {}));
        }),
      );
      const list = subscriptions.filter((item) => ListingsWithVideo.has(item.data.url));
      setList(list);
    })();
  }, []);

  return {
    data: list,
  };
}
