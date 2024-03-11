import { Module } from '@nestjs/common';
import { StatisticService } from './statistic.service';
import { TaskModule } from '../TaskService/task.module';

@Module({
  imports: [TaskModule],
  providers: [StatisticService],
  exports: [StatisticService],
})
export class StatisticModule {}
