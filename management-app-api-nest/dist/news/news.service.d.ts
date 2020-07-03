import { Model } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { News } from './interfaces/news.interface';
export declare class NewsService {
    private readonly newsModel;
    constructor(newsModel: Model<News>);
    getAll(): Promise<News[]>;
    get(id: any): Promise<News>;
    add(createNewsDto: CreateNewsDto): Promise<News>;
    delete(id: any): Promise<any>;
}
