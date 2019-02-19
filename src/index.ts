import {RelationtestApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {RelationtestApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new RelationtestApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
