import { Component, inject, Input, OnInit } from '@angular/core';
import { NovedadService } from "../../services/novedad.service";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-tutorial-edit',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './tutorial-edit.component.html',
  styleUrl: './tutorial-edit.component.css'
})
export class TutorialEditComponent implements OnInit {
  @Input('id') id!: string;
  private readonly novedadService: NovedadService = inject(NovedadService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly router: Router = inject(Router);

  formTutorial: FormGroup = this.formBuilder.group({
    _id: [''],
    titulo: ['', [Validators.required]],
    contenido: ['', [Validators.required]],
    media: ['', [Validators.required, Validators.minLength(5)]],
    dificultad: ['', [Validators.required]],
    __v: ['']
  });

  dataLoaded = false;
  edit = false;

  ngOnInit(): void {
    if (this.id) {
      this.loadTutorial();
      this.edit = true;
    } else {
      this.edit = false;
      this.dataLoaded = true;
      this.formTutorial.reset();
    }
  }

  private loadTutorial() {
    this.novedadService.getOneTutorial(this.id).subscribe({
      next: value => {
        this.formTutorial.setValue(value);
        this.dataLoaded = true;
      },
      error: err => {
        console.error('Error cargando tutorial:', err.message);
      }
    });
  }

  get titulo(): any {
    return this.formTutorial.get('titulo');
  }
  get contenido(): any {
    return this.formTutorial.get('contenido');
  }
  get media(): any {
    return this.formTutorial.get('media');
  }
  get dificultad(): any {
    return this.formTutorial.get('dificultad');
  }

  // Método para manejar la carga de archivos
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Crear un objeto FormData para enviar el archivo al backend
      const formData = new FormData();
      formData.append('image', file, file.name);

      // Subir la imagen a través del servicio
      this.novedadService.uploadImage(formData).subscribe(
        (response) => {
          // Asignar la URL de la imagen recibida desde el backend
          this.formTutorial.patchValue({
            media: response.imageUrl // Suponiendo que el backend devuelve la URL de la imagen
          });
        },
        (error) => {
          console.error('Error al subir la imagen', error);
        }
      );
    }
  }

  submit() {
    if (this.formTutorial.invalid) {
      this.formTutorial.markAllAsTouched();
      return;
    }

    const formValue = this.formTutorial.getRawValue();

    if (this.edit) {
      this.novedadService.updateTutorial(formValue).subscribe({
        next: () => {},
        complete: () => {
          setTimeout(() => {
            this.router.navigateByUrl('/tutorial-list');
          }, 1000);
        },
        error: err => {
          console.error('Error al actualizar:', err.message);
        }
      });
    } else {
      this.novedadService.addTutorial(formValue).subscribe({
        next: () => {},
        complete: () => {
          setTimeout(() => {
            this.router.navigateByUrl('/tutorial-list');
          }, 1000);
        },
        error: err => {
          console.error('Error al crear tutorial:', err.message);
        }
      });
    }
  }
}
