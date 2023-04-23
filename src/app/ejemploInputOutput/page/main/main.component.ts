import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  listaProductos: any[];
  producto = { precio: 1, marca: '', stock: 1 };
  productoSeleccionado!: any;

  constructor() {
    this.listaProductos = [
      { precio: 100, marca: 'A', stock: 20 },
      { precio: 500, marca: 'B', stock: 50 },
      { precio: 350, marca: 'C', stock: 125 },
    ];
  }
  guardar($event: any) {
    this.listaProductos.push($event);
    console.log($event);
  }
  MostrarDetalle($event: any) {
    this.productoSeleccionado = $event;
  }
}
