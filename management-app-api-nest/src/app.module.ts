import { SeederModule } from './database/seeder.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/schools_database'),
    UsersModule,
    AuthModule,
    NewsModule,
    SeederModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}