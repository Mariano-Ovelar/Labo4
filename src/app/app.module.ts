import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { Clase02Component } from './clases/clase02/clase02.component';
import { Clase01Component } from './clases/clase01/clase01.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomInputComponent } from './shared/components/custom-input/custom-input.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { MainComponent } from './ejemploInputOutput/page/main/main.component';
import { ComponenteListadoComponent } from './ejemploInputOutput/componente/componente-listado/componente-listado.component';
import { ComponenteAltaComponent } from './ejemploInputOutput/componente/componente-alta/componente-alta.component';
import { ComponenteDetalleComponent } from './ejemploInputOutput/componente/componente-detalle/componente-detalle.component';
import { ComponenteModificarComponent } from './ejemploInputOutput/componente/componente-modificar/componente-modificar.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    Clase02Component,
    Clase01Component,
    NavbarComponent,
    RegisterComponent,
    CustomInputComponent,
    AcercaDeComponent,
    MainComponent,
    ComponenteListadoComponent,
    ComponenteAltaComponent,
    ComponenteDetalleComponent,
    ComponenteModificarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      progressBar: true,
      progressAnimation: 'increasing',
      closeButton: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
