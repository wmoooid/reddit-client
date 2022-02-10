import axios from 'axios';
import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware';
import { NextApiRequest, NextApiResponse } from 'next';
import { getCookie } from 'cookies-next';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);
  const token = getCookie('token', { req, res });
  console.log('TOKEN:', token);

  // try {
  const data = await axios.get('https:/oauth.reddit.com/hot', {
    headers: { Authorization: `bearer ${token}` },
  });
  console.log(data);
  res.status(200).json(data);
  // } catch (error) {
  //   console.log(error);
  // }
}
