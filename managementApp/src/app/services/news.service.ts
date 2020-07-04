import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<any[]>(`${this.url}/news`);
  }

  getNewsDetails(id): Observable<any> {
    return this.http.get(`${this.url}/news/${id}`);
  }

  addNews(data) {
    return this.http.post(`${this.url}/news`, data);
  }

  deleteNews(id) {
    return this.http.delete(`${this.url}/news/${id}`);
  }
}
