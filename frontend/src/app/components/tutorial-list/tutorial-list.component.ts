import { Component, inject } from '@angular/core';
import { NovedadService } from "../../services/novedad.service";
import {Tutorial } from "../../common/novedad";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterLink } from "@angular/router";
import {faMagnifyingGlass, faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FormsModule} from "@angular/forms";
import { Modal } from 'bootstrap';
import {NgIf} from "@angular/common";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutorial-list',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterLink,
    FormsModule,
    NgIf,
      CommonModule,
  ],
  templateUrl: './tutorial-list.component.html',
  styleUrls: ['./tutorial-list.component.css']
})
export class TutorialListComponent {
  private readonly novedadService: NovedadService = inject(NovedadService);
  public readonly authService = inject(AuthService);
  tutoriales: Tutorial[] = [];
  tutorialesFiltrados: Tutorial[] = [];

  filtroDificultad: string = '';
  dataLoaded = false;

  constructor() {
    this.loadTutoriales();
  }

  private loadTutoriales() {
    this.novedadService.getTutoriales().subscribe({
      next: value => {
        this.dataLoaded = true;
        this.tutoriales = value;
        this.filtrarTutoriales(); // aplica el filtro después de cargar
      },
      complete: () => {
        console.log('tutoriales cargados');
      },
      error: err => {
        console.error(err);
      }
    });
  }

  filtrarTutoriales() {
    if (this.filtroDificultad === '') {
      this.tutorialesFiltrados = this.tutoriales;  // Mostrar todos los tutoriales
    } else {
      this.tutorialesFiltrados = this.tutoriales.filter(
        t => t.dificultad === this.filtroDificultad
      );
    }
  }




  tutorialParaEliminar: Tutorial | null = null;

  mostrarConfirmacion(tutorial: Tutorial) {
    this.tutorialParaEliminar = tutorial;

    const modalElement = document.getElementById('confirmDeleteModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();
    }
  }

  confirmarEliminar() {
    if (!this.tutorialParaEliminar) return;

    this.novedadService.deleteTutorial(this.tutorialParaEliminar._id).subscribe({
      next: value => {
        console.log(value);
        this.loadTutoriales(); // recarga la lista
      },
      complete: () => {
        console.log('tutorial eliminado');
        this.tutorialParaEliminar = null;
      },
      error: err => console.error(err)
    });

    // Cierra el modal
    const modalElement = document.getElementById('confirmDeleteModal');
    if (modalElement) {
      const modal = Modal.getInstance(modalElement);
      modal?.hide();
    }
  }


  protected readonly faTrashCan = faTrashCan;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;


}
