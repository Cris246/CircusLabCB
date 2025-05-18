import {Component, inject} from '@angular/core';
import {NovedadService} from "../../services/novedad.service";
import {Novedad} from "../../common/novedad";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

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

    showToastMessage() {
        this.showToast = true;
        setTimeout(() => {
            this.showToast = false;
        }, 3000); // toast visible 3 segundos
    }

    hideToast() {
        this.showToast = false;
    }
}
