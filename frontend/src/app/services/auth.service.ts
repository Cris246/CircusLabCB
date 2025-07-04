// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  constructor(private http: HttpClient) {}

  login(usuario: string, password: string) {
    return this.http.post<{ token: string }>(environment.baseUrl+'usuario/login', { usuario, password });
  }



  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }


  logout(): void {
    localStorage.removeItem('token');
  }
  getUserRole(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.rol || null;
    } catch (e) {
      return null;
    }
  }


  isProfesor(): boolean {
    return this.isAuthenticated() && this.getUserRole() === 'profesor';
  }

}
