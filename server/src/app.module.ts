import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatadiffController } from './controllers/datadiff.controller';
import { DatediffService } from './services/datediff.service';

@Module({
  imports: [],
  controllers: [AppController, DatadiffController],
  providers: [AppService, DatediffService],
})
export class AppModule {}
