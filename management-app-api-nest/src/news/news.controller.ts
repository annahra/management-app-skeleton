import { RoleGuard, Roles } from './../auth/role.guard';
import { NewsService } from './news.service';
import { Controller, Get, Res, HttpStatus, Post, Body, Put, NotFoundException, Delete, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateNewsDto } from './dto/create-news.dto';

@Controller('news')
export class NewsController {
    constructor(private newsService: NewsService) { }

    @UseGuards(AuthGuard(), RoleGuard)
    @Roles('PRINCIPAL')
    @Post()
     async add(@Res() res, @Body() createNewsDto: CreateNewsDto) {
         const news = await this.newsService.add(createNewsDto);
         return res.status(HttpStatus.OK).json({
             message: "News has been created successfully",
             news
         })
     }
 
     @UseGuards(AuthGuard())
     @Get()
     async getAll(@Res() res) {
         const news = await this.newsService.getAll();
         return res.status(HttpStatus.OK).json(news);
     }
 
     @UseGuards(AuthGuard())
     @Get(':id')
     async get(@Res() res, @Param('id') id) {
         const news = await this.newsService.get(id);
         if (!news) throw new NotFoundException('News does not exist!');
         return res.status(HttpStatus.OK).json(news);
     }

    @UseGuards(AuthGuard(), RoleGuard)
    @Roles('PRINCIPAL')
    @Delete(':id')
    async delete(@Res() res, @Param('id') id) {
        const news = await this.newsService.delete(id);
        if (!news) throw new NotFoundException('User does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'News has been deleted',
            news
        })
    }
}
