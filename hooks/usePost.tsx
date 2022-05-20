import { BASE_URL, fetcher } from '@/lib/fetcher';
import { getCookie } from 'cookies-next';
import useSWR from 'swr';

export default function usePost(pid: string | string[] | undefined) {
  const token = getCookie(`token`);

  const URL_PARAMS = new URLSearchParams({
    raw_json: '1',
    // limit: '50',
  });

  const { data, error, mutate } = useSWR(
    [
      `${BASE_URL}/comments/${pid}?${URL_PARAMS}`,
      {
        method: 'get',
        headers: { Authorization: `bearer ${token}` },
      },
    ],
    fetcher,
  );

  const [postResponse, commentsResponse] = data || [];
  const [post] = postResponse?.data?.children || [];
  const comments = commentsResponse?.data?.children || [];

  return {
    post: post,
    comments: comments,
    isLoading: !error && !data,
    isError: error,
    mutate: mutate,
  };
}
