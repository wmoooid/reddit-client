import Cors from 'cors';
import fetch from 'node-fetch';
import initMiddleware from '@/lib/init-middleware';
import { setCookies } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
import { redis } from '@/lib/redis';

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

  const REFRESH_TOKEN = await redis.get('REFRESH_TOKEN');

  console.log(REFRESH_TOKEN);

  const form = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: `${REFRESH_TOKEN}`,
  });

  const credentials = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`).toString('base64');

  try {
    const response = await fetch('https://www.reddit.com/api/v1/access_token', {
      method: 'POST',
      headers: { Authorization: `Basic ${credentials}` },
      body: form,
    });
    const data = (await response.json()) as ResponseDataType;
    console.log(response.status);
    setCookies(`token`, `${data['access_token']}`, { req, res, expires: new Date(Date.now() + 86400e2) });
    redis.set('REFRESH_TOKEN', data['refresh_token']);
    return res.status(response.status).send(response.status);
  } catch (error) {
    console.log(error);
  }
}
