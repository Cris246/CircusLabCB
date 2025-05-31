import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NovedadListComponent } from './components/novedad-list/novedad-list.component';
import { NovedadEditComponent } from './components/novedad-edit/novedad-edit.component';
import { TutorialListComponent } from './components/tutorial-list/tutorial-list.component';
import { TutorialEditComponent } from './components/tutorial-edit/tutorial-edit.component';
import { LoginComponent } from './components/login/login.component';
import {ContactoComponent} from "./components/contacto/contacto.component";
import { AuthGuard } from './guards/auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  },
  {
    path: 'novedad-list',
    component: NovedadListComponent
  },
  {
    path: 'novedad-add',
    component: NovedadEditComponent
  },
  {
    path: 'novedad-edit/:id',
    component: NovedadEditComponent
  },
  {
    path: 'tutorial-list',
    component: TutorialListComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'tutorial-add',
    component: TutorialEditComponent,

  },
  {
    path: 'tutorial-edit/:id',
    component: TutorialEditComponent,
   
  },
  {
    path: 'login',
    component: LoginComponent
  },
];
