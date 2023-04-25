import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  listaProductos: any[];
  producto = { precio: 0, marca: '', stock: 0 };
  productoSeleccionado!: any;

  modificarActivado: boolean = false;
  detalleActivado: boolean = false;
  altaActivado: boolean = false;

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
  mostrarDetalle($event: any) {
    this.modificarActivado = false;
    this.altaActivado = false;
    this.detalleActivado = true;
    this.productoSeleccionado = $event;
  }
  modificar($event: any) {
    this.modificarActivado = true;
    this.detalleActivado = true;
    this.altaActivado = false;
    this.productoSeleccionado = $event;
  }
  agregarProducto() {
    this.altaActivado = true;
    this.modificarActivado = false;
    this.detalleActivado = false;
  }
  modificarProducto($event: any){
    this.productoSeleccionado.marca=$event.marca;
    this.productoSeleccionado.precio=$event.precio;
    this.productoSeleccionado.stock=$event.stock;

    this.altaActivado = false;
    this.modificarActivado = false;
    this.detalleActivado = false;
  }
}
