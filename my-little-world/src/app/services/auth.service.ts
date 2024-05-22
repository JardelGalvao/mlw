import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  createUser(first_name: string, last_name: string, email: string, username: string, password: string): Observable<Users>{
    return this.http.post<Users>(
      '/api/users',
      {first_name, last_name, email, username, password}
    );
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      '/api/login',
      {username, password}
    );
  }
}
