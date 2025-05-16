import { Component, inject } from '@angular/core';
import { NovedadService } from "../../services/novedad.service";
import { Novedad, Tutorial } from "../../common/novedad";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterLink } from "@angular/router";
import {faMagnifyingGlass, faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FormsModule} from "@angular/forms";
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-tutorial-list',
  standalone: true,
  imports: [
    FaIconComponent,
    RouterLink,
    FormsModule
  ],
  templateUrl: './tutorial-list.component.html',
  styleUrl: './tutorial-list.component.css'
})
export class TutorialListComponent {
  private readonly novedadService: NovedadService = inject(NovedadService);
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



  deleteTutorial(tutorial: Tutorial) {
    if (confirm('¿Seguro que desea eliminar el tutorial?')) {
      this.novedadService.deleteTutorial(tutorial._id).subscribe({
        next: value => {
          console.log(value);
          this.loadTutoriales(); // recarga y re-filtra
        },
        complete: () => {
          console.log('tutorial borrado');
        },
        error: err => console.error(err)
      });
    }
  }

  protected readonly faTrashCan = faTrashCan;
  protected readonly faPenToSquare = faPenToSquare;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;

  AbreModal(id: string) {
    const modalEl = document.getElementById('Modal' + id);
    if (modalEl) {
      const modal = new Modal(modalEl);
      modal.show();
    }
  }
}
