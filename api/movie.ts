import fetch from 'node-fetch';
import { VercelRequest, VercelResponse } from '@vercel/node';

/*
  Vercel 컴퓨팅 서버에서 사용할 서버리스 함수
  동작환경 : Vercel 패키지가 동작하는 NodeJS 환경
  - NodeJS는 fetch함수가 없기 때문에 'node-fetch' 설치
  - CommonJS방식을 사용하기 위해 2버전을 지정하여 설치
 */
export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { title, page, id } = JSON.parse(request.body);
  const BASE_URL = `https://www.omdbapi.com/?apikey=${process.env.APIKEY}`;
  const url = id //
    ? `${BASE_URL}&i=${id}&plot=full`
    : `${BASE_URL}&s=${title}&page=${page}`;
  const res = await fetch(url);
  const json = await res.json();

  response.status(200).json(json);
}
