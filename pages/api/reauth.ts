import fetch from 'node-fetch';
import { NextApiRequest, NextApiResponse } from 'next';
import { redis } from '@/lib/redis';

interface ResponseDataType {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

let shouldWait = false;
let currentToken: string;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (shouldWait) {
    console.log('OLD TOKEN', currentToken);
    return res.status(200).json({ access_token: currentToken });
  } else {
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
      redis.set('REFRESH_TOKEN', data['refresh_token']);
      currentToken = data['access_token'];
      console.log('NEW TOKEN', currentToken);
      shouldWait = true;
      const timeout = setTimeout(() => {
        shouldWait = false;
      }, 45 * 60 * 1000);
      return res.status(response.status).json({ access_token: data['access_token'] });
    } catch (error) {
      console.log(error);
    }
  }
}
