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

  const postsList: Array<ListingsResponseChildrenType> = [];

  const subredditsList = new Set();

  const dataArr: Array<ListingResposeRootType> = [];

  subscriptions.forEach(async (subscription) => {
    const res = await fetch(`${BASE_URL}${subscription.data.url}?${URL_PARAMS}`, GET_PARAMS);
    const data = await res.json();
    return data.children;
  });

  // dataArr.forEach((item) => {
  //   item.data.children.forEach((post) =>
  //     post.data.is_video ? subredditsList.add(post.data.subreddit_name_prefixed) : () => {},
  //   );
  //   console.log(item);
  // });
}
