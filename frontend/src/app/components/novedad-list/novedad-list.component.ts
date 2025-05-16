import {Component, inject} from '@angular/core';
import {NovedadService} from "../../services/novedad.service";
import {Novedad} from "../../common/novedad";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faPenToSquare, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-novedad-list',
  standalone: true,
  imports: [
    FaIconComponent,
    ReactiveFormsModule,
    RouterLink,

  ],
  templateUrl: './novedad-list.component.html',
  styleUrl: './novedad-list.component.css'
})
export class NovedadListComponent {
private readonly novedadService=inject(NovedadService);
novedades:Novedad[]=[];
constructor() {
  this.loadNovedades();
}

dataLoaded=false;

  private loadNovedades() {
    this.novedadService.getNovedades().subscribe(
      {
        next:value=>{
          this.dataLoaded=true;
          this.novedades = value;
        },
        complete:()=>{
          console.log('novedades cargadas');
        },
        error:err=>{
          console.error(err);
        }
      }
    )
  }

  protected readonly faTrashCan = faTrashCan;
  protected readonly faPenToSquare = faPenToSquare;
  deleteNovedad(novedad: Novedad) {
    if (confirm('seguro que desea eliminar el novedad?')){
      this.novedadService.deleteNovedad(novedad._id).subscribe(
        {
          next:value=>{
            console.log(value);
            this.loadNovedades();
          },
          complete:()=>{
            console.log('novedad borrada');
          },
          error:err=>console.error(err)
        }
      )
    }
  }



}
