import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showToast = false;

  constructor(public authService: AuthService,private router: Router) {}

  logout() {
    this.authService.logout();
    this.showToast = true;
    this.router.navigate(['/inicio']);


    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  hideToast() {
    this.showToast = false;
  }
}
