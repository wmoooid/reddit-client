import axios from 'axios';
import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware';
import { setCookies } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://reddit-client-kohl.vercel.app/api/auth`,
      {
        auth: { username: `${process.env.CLIENT_ID}`, password: `${process.env.CLIENT_SECRET}` },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      },
    )
    .then(({ data }) => {
      console.log(data);
      setCookies('token', data['access_token'], { req, res });
      res.redirect('/');
    })
    .catch(console.log);
}
