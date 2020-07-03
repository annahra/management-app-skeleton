import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { News } from './interfaces/news.interface';

@Injectable()
export class NewsService {

    constructor(@InjectModel('News') private readonly newsModel: Model<News>) { }

    async getAll(): Promise<News[]> {
        const news = await this.newsModel.find().exec();
        return news;
    }

    async get(id): Promise<News> {
        const news = await this.newsModel.findById(id).exec();
        return news;
    }

    async add(createNewsDto: CreateNewsDto): Promise<News> {
        const news = await new this.newsModel(createNewsDto);
        return news.save();
    }

    async delete(id): Promise<any> {
        const news = await this.newsModel.findByIdAndRemove(id);
        return news;
    }
}
