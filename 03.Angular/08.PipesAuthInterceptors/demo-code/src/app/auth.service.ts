import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(password: string, name: string, email: string) {
    return this.http.post<{ message: string, userId: string }>('auth/signup', { password, name, email });
  }

  signin(email: string, password: string) {
    return this.http.post<{ token: string, message: string, userId: string }>('auth/signin', { email, password });
  }
}
