import { Test } from '@nestjs/testing';
import { CoreModule } from './core.module';
import { ConfigService } from '@nestjs/config';

describe('AppService', () => {
  let config: ConfigService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [CoreModule],
    }).compile();

    config = app.get<ConfigService>(ConfigService);
  });

  describe('get config', () => {
    it('should return app name rest_api_test', () => {
      expect(config.get('app.name')).toEqual('rest_api_test');
    });
  });
});
