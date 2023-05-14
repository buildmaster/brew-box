/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

async function bootstrap() {
  let httpsOptions = null;
  if (process.env.NODE_ENV === 'DEVELOPMENT') {
    httpsOptions = {
      key: fs.readFileSync(
        path.join(process.cwd(), '.mkcert-ssh-cert/dev.pem')
      ),
      cert: fs.readFileSync(
        path.join(process.cwd(), '.mkcert-ssh-cert/cert.pem')
      ),
    };
  }
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
    cors: true,
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  const ipAddresses = Object.values(os.networkInterfaces()).reduce(
    (r, list) => {
      return r.concat(
        list.reduce(
          (rr, i) =>
            rr.concat((i.family === 'IPv4' && !i.internal && i.address) || []),
          []
        )
      );
    },
    []
  );
  ipAddresses.forEach((ip) => {
    Logger.log(
      `🚀 Application is running on: https://${ip}:${port}/${globalPrefix}`
    );
  });
}

bootstrap();
