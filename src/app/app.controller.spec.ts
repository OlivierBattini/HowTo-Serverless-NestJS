import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { AppModule } from './app.module';
import { Prefix } from '../constants/prefix';

describe('AppController', () => {
  let nestApp: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    nestApp = moduleFixture.createNestApplication();
    await nestApp.init();
  });

  it(`/${Prefix.STATS} (GET)`, () => {
    return request(nestApp.getHttpServer())
      .get(`/${Prefix.STATS}`)
      .expect(200)
      .expect((response: request.Response) => {
        const expectedPropertyNames = [
          'cpuCount',
          'freeMem',
          'totalMem',
          'arch',
        ];
        expectedPropertyNames.forEach((propertyName: string) => {
          expect(response.body).toHaveProperty(propertyName);
        });
      });
  });
});
