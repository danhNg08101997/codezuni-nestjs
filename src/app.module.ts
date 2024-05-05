import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { MySqlModule } from './provider/database/mysql/provider.module';

@Module({
  imports: [AppConfigModule, MySqlModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
