// login.component.ts
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Servicio de autenticación
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  constructor() {
    this.loginForm = this.fb.group({
      usuario: [''],
      password: ['']
    });
  }

  login() {
    const { usuario, password } = this.loginForm.value;

    // Llamamos al AuthService para hacer el login
    this.authService.login(usuario, password).subscribe({
      next: (res) => {
        // Guardamos el token en el localStorage
        this.authService.saveToken(res.token);
        // Redirigimos a la página de inicio
        this.router.navigate(['/inicio']);
      },
      error: (err) => {
        console.error(err);
        alert('Usuario o contraseña incorrectos');
      }
    });
  }
}
