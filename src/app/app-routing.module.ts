import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { LoginComponent } from './Componentes/login/login.component';
import { Clase02Component } from './clases/clase02/clase02.component';
import { Clase01Component } from './clases/clase01/clase01.component';
import { RegisterComponent } from './componentes/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: BienvenidoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'clase01',
    component: Clase01Component
  },
  {
    path: 'clase02',
    component: Clase02Component
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
