import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any[]>(`${this.url}/users`);
  }

  getTeachers() {
    return this.http.get<any[]>(`${this.url}/users/teachers`);
  }

  getUserDetails(id): Observable<any> {
    return this.http.get(`${this.url}/users/${id}`);
  }

  addUser(data) {
    return this.http.post(`${this.url}/users`,data);
  }

  updateUser(id, data) {
    return this.http.put(`${this.url}/users/${id}`, data);
  }

  deleteUser(id) {
    return this.http.delete(`${this.url}/users/${id}`);
  }
}
