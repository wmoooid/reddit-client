import { BASE_URL } from '@/lib/fetcher';
import { ListingsResponseType, ListingsResponseChildrenType, ListingResposeRootType } from '@/types/listings';
import { getCookie } from 'cookies-next';
import useSubscriptions from './useSubscriptions';

export default function useStoriesList() {
  const token = getCookie(`token`);

  const URL_PARAMS = new URLSearchParams({
    raw_json: '1',
    limit: '10',
  });

  const GET_PARAMS = {
    method: 'get',
    headers: { Authorization: `bearer ${token}` },
  };

  const { subscriptions } = useSubscriptions();
  const storiesList = new Set();

  subscriptions.map(async (subscription) => {
    const res = await fetch(`${BASE_URL}${subscription.data.url}?${URL_PARAMS}`, GET_PARAMS);
    const data: ListingResposeRootType = await res.json();
    data.data.children.map((item) => (item.data.is_video ? storiesList.add(subscription.data.url) : () => {}));
  });

  return {
    storiesList: storiesList,
  };
}
