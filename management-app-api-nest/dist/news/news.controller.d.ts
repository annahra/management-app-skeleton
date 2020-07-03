import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
export declare class NewsController {
    private newsService;
    constructor(newsService: NewsService);
    add(res: any, createNewsDto: CreateNewsDto): Promise<any>;
    getAll(res: any): Promise<any>;
    get(res: any, id: any): Promise<any>;
    delete(res: any, id: any): Promise<any>;
}
