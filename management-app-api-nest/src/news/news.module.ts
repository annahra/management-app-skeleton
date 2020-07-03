import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsSchema } from './schemas/news.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'News', schema: NewsSchema}]),
    PassportModule.register({ defaultStrategy: 'jwt', session: false })
  ],
  controllers: [NewsController],
  providers: [NewsService]
})
export class NewsModule {}
