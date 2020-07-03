import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from "./../../environments/environment";
import { take, map, switchMap } from "rxjs/operators";

export const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl;

  constructor(private storage: Storage, private http: HttpClient,
    public helper: JwtHelperService) { }

  login(credentials: { email: string, password: string}) {
    return this.http.post(`${this.url}/auth`, credentials).pipe(
      take(1),
      map(res => res['token']),
      map(token => {
        this.storage.set(TOKEN_KEY, token);
        return this.helper.decodeToken(token);
      })
    )
  }
}
