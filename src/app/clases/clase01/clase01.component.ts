import { Component } from '@angular/core';

@Component({
  selector: 'app-clase01',
  templateUrl: './clase01.component.html',
  styleUrls: ['./clase01.component.scss']
})
export class Clase01Component {
numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  edad1: number = 0;
  edad2: number = 0;
  promedioEdad: number = 0;
  sumaEdad: number = 0;

  calcular(tipo: "edad" | "numero") {
    if (this.validarNumero(tipo)) {
      this.sumar(tipo);
      this.promedio(tipo);
    }
  }

  sumar(tipo: "edad" | "numero") {
    if (tipo === "edad")
      this.sumaEdad = Number(this.edad1) + Number(this.edad2);
    else
      this.resultado = Number(this.numero1) + Number(this.numero2);
  }

  promedio(tipo: "edad" | "numero") {
    if (tipo === "edad") {
      this.promedioEdad = (Number(this.edad1) + Number(this.edad2)) / 2;
    }
  }

  validarNumero(tipo: "edad" | "numero"): boolean {
    return true;
  }

  limpiar() {
    this.edad1 = 0;
    this.edad2 = 0;
    this.promedioEdad = 0;
    this.sumaEdad = 0;
  }
}
