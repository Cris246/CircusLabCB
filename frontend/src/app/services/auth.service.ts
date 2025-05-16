// auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api'; // Ruta del servidor

  constructor(private http: HttpClient) {}

  login(usuario: string, password: string) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/usuario/login`, { usuario, password });
  }

  register(usuario: string, password: string, rol: string) {
    return this.http.post(`${this.apiUrl}/usuario/register`, { usuario, password, rol });
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
}
