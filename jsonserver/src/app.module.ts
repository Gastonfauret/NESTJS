import { Module } from '@nestjs/common';
import { JsonApiService } from './json-api/json-api.service';
import { JsonApiController } from './json-api/json-api.controller';

@Module({
  imports: [],
  controllers: [JsonApiController],
  providers: [JsonApiService],
})
export class AppModule {}
