import { Module } from '@nestjs/common';
import { GoogleService } from './google.service';

@Module({
  controllers: [],
  providers: [GoogleService]
})
export class GoogleModule {}
