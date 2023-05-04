import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JournalsController } from './journals/journals.controller';
import { JournalService } from './journals/journal.service';

@Module({
  imports: [],
  controllers: [AppController, JournalsController],
  providers: [AppService, JournalService],
})
export class AppModule {}
