type FetcherArgs = [string, object];
export const fetcher = (...args: FetcherArgs) => fetch(...args).then((res) => res.json());
