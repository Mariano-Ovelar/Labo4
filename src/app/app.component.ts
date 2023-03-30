import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  numero1: number = 1;
  numero2: number = 2;
  resultado: number = 0;
  sumar() {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }


  edad1: number = 0;
  edad2: number = 0;
  promedio: number = 0;
  sumaEdad: number = 0;
  calcular() {
    if (Number(this.edad1) >= 0 && Number(this.edad1) <= 100 && Number(this.edad2) >= 0 && Number(this.edad2) <= 100)
      this.promedio = (Number(this.edad1) + Number(this.edad2)) / 2;
      this.sumarEdad();
  }
  limpiar() {
    this.edad1 = 0;
    this.edad2 = 0;
    this.promedio = 0;
    this.sumaEdad = 0;
  }
  sumarEdad() {
    this.sumaEdad = Number(this.edad1) + Number(this.edad2);
  }

}
