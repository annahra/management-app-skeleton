import { UsersModule } from './../users/users.module';
import { Seeder } from './seeder';
import { Module } from '@nestjs/common';

@Module({
    imports: [UsersModule],
    providers: [Seeder],
  })
  export class SeederModule {}