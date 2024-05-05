import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MySqlConfigModule } from 'src/config/database/mysql/config.module';
import { MySqlConfigService } from 'src/config/database/mysql/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [MySqlConfigModule],
      useFactory: (mySqlConfigService: MySqlConfigService) => ({
        type: 'mysql',
        host: mySqlConfigService.host,
        port: mySqlConfigService.port,
        username: mySqlConfigService.username,
        password: mySqlConfigService.password,
        database: mySqlConfigService.database,
        entities: [],
        synchronize: true,
      }),
      inject: [MySqlConfigService],
    } as TypeOrmModuleOptions),
  ],
})
export class MySqlModule {}
