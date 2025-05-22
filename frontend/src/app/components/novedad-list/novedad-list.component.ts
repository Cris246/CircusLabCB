import {Component, inject} from '@angular/core';
import {NovedadService} from "../../services/novedad.service";
import {Novedad, Tutorial} from "../../common/novedad";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faEye, faMagnifyingGlass, faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import {Modal} from "bootstrap";

@Component({
    selector: 'app-novedad-list',
    standalone: true,
    imports: [
        FaIconComponent,
        ReactiveFormsModule,
        CommonModule,
        RouterLink,
    ],
    templateUrl: './novedad-list.component.html',
    styleUrls: ['./novedad-list.component.css']
})
export class NovedadListComponent {
    private readonly novedadService = inject(NovedadService);
    public readonly authService = inject(AuthService);

    novedades: Novedad[] = [];
    dataLoaded = false;

    // Estado para controlar el toast
    showToast = false;

    constructor() {
        this.loadNovedades();
    }

    private loadNovedades() {
        this.novedadService.getNovedades().subscribe({
            next: value => {
                this.dataLoaded = true;
                this.novedades = value;
            },
            complete: () => {
                console.log('novedades cargadas');
            },
            error: err => {
                console.error(err);
            }
        });
    }

    protected readonly faTrashCan = faTrashCan;
    protected readonly faPenToSquare = faPenToSquare;

    deleteNovedad(novedad: Novedad) {
        if (confirm('¿Seguro que desea eliminar la novedad?')) {
            this.novedadService.deleteNovedad(novedad._id).subscribe({
                next: () => {
                    this.loadNovedades();
                    this.showToastMessage();
                },
                complete: () => {
                    console.log('novedad borrada');
                },
                error: err => console.error(err)
            });
        }
    }

    novedadParaEliminar: Novedad | null = null;

    abrirModal(novedad: Novedad) {
        this.novedadService.getOneNovedad(novedad._id).subscribe({
            next: (novedadActualizada) => {
                // Actualiza la novedad con el contador actualizado
                const index = this.novedades.findIndex(n => n._id === novedadActualizada._id);
                if (index !== -1) {
                    this.novedades[index] = novedadActualizada;
                }

                // Abre el modal manualmente
                const modalElement = document.getElementById('Modal' + novedad._id);
                if (modalElement) {
                    const modal = new Modal(modalElement);
                    modal.show();
                }
            },
            error: (err) => console.error(err)
        });
    }

    mostrarConfirmacion(novedad: Novedad) {
        this.novedadParaEliminar = novedad;

        const modalElement = document.getElementById('confirmDeleteModal');
        if (modalElement) {
            const modal = new Modal(modalElement);
            modal.show();
        }
    }

    confirmarEliminar() {
        if (!this.novedadParaEliminar) return;

        this.novedadService.deleteNovedad(this.novedadParaEliminar._id).subscribe({
            next: value => {
                console.log(value);
                this.loadNovedades(); // recarga la lista
            },
            complete: () => {
                console.log('novedad eliminado');
                this.novedadParaEliminar = null;
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

    showToastMessage() {
        this.showToast = true;
        setTimeout(() => {
            this.showToast = false;
        }, 3000); // toast visible 3 segundos
    }

    hideToast() {
        this.showToast = false;
    }

    protected readonly faMagnifyingGlass = faMagnifyingGlass;
    protected readonly faEye = faEye;
}
