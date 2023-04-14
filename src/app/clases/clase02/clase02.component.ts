import { Component } from '@angular/core';

@Component({
  selector: 'app-clase02',
  templateUrl: './clase02.component.html',
  styleUrls: ['./clase02.component.scss'],
})
export class Clase02Component {
  nombre: string = "";
  apellido: string = "";
  resultado: string="";

  mostrar(){
    this.resultado=  `${this.nombre} ${this.apellido}`;
  }
}
