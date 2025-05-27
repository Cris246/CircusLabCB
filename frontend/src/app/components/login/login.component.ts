import { Component, inject, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  toastMessage = '';

  @ViewChild('toastElem') toastElem!: ElementRef;

  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  constructor() {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.showToast('Por favor, completa todos los campos');
      return;
    }

    const { usuario, password } = this.loginForm.value;

    this.authService.login(usuario, password).subscribe({
      next: (res: { token: string }) => {
        this.authService.saveToken(res.token);
        this.router.navigate(['/inicio']);
      },
      error: (err) => {
        console.error(err);
        this.showToast('Usuario o contraseña incorrectos');
      }
    });
  }

  showToast(message: string) {
    this.toastMessage = message;
    const toast = new bootstrap.Toast(this.toastElem.nativeElement);
    toast.show();
  }

  hideToast() {

    const toast = bootstrap.Toast.getInstance(this.toastElem.nativeElement);
    toast?.hide();
  }
}
