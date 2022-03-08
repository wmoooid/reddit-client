import Cors from 'cors';
import fetch from 'node-fetch';
import initMiddleware from '@/lib/init-middleware';
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

export default async function handler(res: {
  active_user_count: number;
  icon_img: string;
  key_color: string;
  name: string;
  subscriber_count: number;
  is_chat_post_feature_enabled: boolean;
  allow_chat_post_creation: boolean;
  allow_images: boolean;
}) {
  res = {
    active_user_count: 5,
    icon_img: '',
    key_color: '',
    name: 'MEMS',
    subscriber_count: 5124,
    is_chat_post_feature_enabled: true,
    allow_chat_post_creation: false,
    allow_images: true,
  };
}
