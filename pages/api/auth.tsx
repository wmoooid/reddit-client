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
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=${process.env.REDIRECT_URL}`,
      {
        auth: { username: `${process.env.CLIENT_ID}`, password: `${process.env.CLIENT_SECRET}` },
        headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      },
    )
    .then(({ data }) => {
      setCookies('token', data['access_token'], { req, res });
      global.__token__ = data['access_token'];
      console.log('AUTH', global.__token__);
      res.redirect('/');
    })
    .catch(console.log);
}
