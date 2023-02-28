import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import config from '../config/index';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        `${process.cwd()}/config/env/.env.${process.env.NODE_ENV}`,
        `${process.cwd()}/config/env/.env`,
      ],
      isGlobal: true,
      expandVariables: true,
      load: config,
    }),
  ],
  providers: [],
  exports: [],
})
export class CoreModule {}
