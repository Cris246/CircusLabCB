import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showToast = false;  // Controla la visibilidad del toast

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.showToast = true;  // Muestra el toast

    // Oculta el toast automáticamente después de 3 segundos
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  hideToast() {
    this.showToast = false;  // Permite cerrar el toast con el botón "X"
  }
}
