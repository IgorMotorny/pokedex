import { productionBaseUrl, devBaseUrl } from '../routes/routes';

export function url(url) {
  const env = process.env.NODE_ENV;
  const baseUrl = env === 'production' ? productionBaseUrl : devBaseUrl;

  if (baseUrl === '/') { return `/${trimSlashes(url)}`; }
  return `/${trimSlashes(baseUrl)}/${trimSlashes(url)}`;
}

export function trimSlashes(str) {
  return str.replace(/^\/|\/$/g, '');
}
