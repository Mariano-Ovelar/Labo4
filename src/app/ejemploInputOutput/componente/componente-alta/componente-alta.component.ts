import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-alta',
  templateUrl: './componente-alta.component.html',
  styleUrls: ['./componente-alta.component.scss'],
})
export class ComponenteAltaComponent {
  @Output() creamosUnProducto: EventEmitter<any> = new EventEmitter<any>();
  producto = { precio: 1, marca: '', stock: 1 };

  guardar() {
    let producto: any = {
      precio: this.producto.precio,
      marca: this.producto.marca,
      stock: this.producto.stock,
    };
    console.log(producto);
    //aca debemos avisar que creamos un obj y debemos enviarlo como parametro

    this.creamosUnProducto.emit(producto);
  }
}
