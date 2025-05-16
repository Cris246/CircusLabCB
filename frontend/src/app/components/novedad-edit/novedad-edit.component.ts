import {Component, inject, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NovedadService} from "../../services/novedad.service";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-novedad-edit',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './novedad-edit.component.html',
  styleUrl: './novedad-edit.component.css'
})
export class NovedadEditComponent implements OnInit {
  @Input('id') id!: string;
  private readonly novedadService: NovedadService = inject(NovedadService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  private readonly router: Router = inject(Router);

  formNovedad: FormGroup = this.formBuilder.group({
    _id: [''],
    titulo: ['', [Validators.required]],
    contenido: ['', [Validators.required]],
    media: ['', [Validators.required, Validators.minLength(5)]],
    __v: ['']
  });

  dataLoaded = false;
  edit = false;

  ngOnInit(): void {
    if (this.id) {
      this.loadNovedad();
      this.edit = true;
    } else {
      this.edit = false;
      this.dataLoaded = true;
      this.formNovedad.reset();
    }
  }

  private loadNovedad() {
    this.novedadService.getOneNovedad(this.id).subscribe({
      next: value => {
        this.formNovedad.setValue(value);
        this.dataLoaded = true;
      },
      error: err => {
        console.error('Error al cargar novedad:', err.message);
      }
    });
  }

  get titulo(): any {
    return this.formNovedad.get('titulo');
  }

  get contenido(): any {
    return this.formNovedad.get('contenido');
  }

  get media(): any {
    return this.formNovedad.get('media');
  }

  submit() {
    if (this.formNovedad.invalid) {
      this.formNovedad.markAllAsTouched();
      return;
    }

    const formValue = this.formNovedad.getRawValue();
    delete formValue.__v;

    if (this.edit) {
      this.novedadService.updateNovedad(formValue).subscribe({
        next: () => {},
        complete: () => {
          setTimeout(() => {
            this.router.navigateByUrl('/novedad-list');
          }, 1000);
        },
        error: err => {
          console.error('Error al actualizar:', err.message);
        }
      });
    } else {
      this.novedadService.addNovedad(formValue).subscribe({
        next: () => {},
        complete: () => {
          setTimeout(() => {
            this.router.navigateByUrl('/novedad-list');
          }, 1000);
        },
        error: err => {
          console.error('Error al crear novedad:', err.message);
        }
      });
    }
  }
}
