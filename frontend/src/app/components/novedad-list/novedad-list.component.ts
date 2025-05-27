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


    novedadParaEliminar: Novedad | null = null;

    abrirModal(novedad: Novedad) {
        this.novedadService.getOneNovedad(novedad._id).subscribe({
            next: (novedadActualizada) => {

                const index = this.novedades.findIndex(n => n._id === novedadActualizada._id);
                if (index !== -1) {
                    this.novedades[index] = novedadActualizada;
                }


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
                this.loadNovedades();
            },
            complete: () => {
                console.log('novedad eliminado');
                this.novedadParaEliminar = null;
            },
            error: err => console.error(err)
        });


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
        }, 3000);
    }


    protected readonly faMagnifyingGlass = faMagnifyingGlass;
    protected readonly faEye = faEye;
}
