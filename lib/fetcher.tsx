type FetcherArgs = [string, object];

type ErrorInfo = {
  info: Response;
  status: number;
};

export const fetcher = async (...args: FetcherArgs) => {
  const res = await fetch(...args);

  if (!res.ok) {
    const error = {} as ErrorInfo;
    error.info = res;
    error.status = res.status;
    throw error;
  }

  return res.json();
};
