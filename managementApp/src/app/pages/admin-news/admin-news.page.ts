import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-admin-news',
  templateUrl: './admin-news.page.html',
  styleUrls: ['./admin-news.page.scss'],
})
export class AdminNewsPage implements OnInit {

  news: Observable<any[]>;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.news = this.newsService.getNews();
  }

}
