import Cors from 'cors';
import fetch from 'node-fetch';
import initMiddleware from '@/lib/init-middleware';
import { setCookies } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

interface ResponseDataType {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await cors(req, res);

  const form = new URLSearchParams({
    grant_type: 'authorization_code',
    code: `${req.query.code}`,
    redirect_uri: `${process.env.REDIRECT_URL}`,
  });

  const credentials = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');

  try {
    const response = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: { Authorization: `Basic ${credentials}` },
      body: form,
    });
    const data = (await response.json()) as ResponseDataType;
    global.__TOKEN = data['access_token'];
    global.__REFRESH_TOKEN = data['refresh_token'];
    setCookies(`token`, `${global.__TOKEN}`, { req, res, expires: new Date(Date.now() + 86400e4) });
    res.redirect(`/`);
  } catch (error) {
    console.log(error);
  }
}
