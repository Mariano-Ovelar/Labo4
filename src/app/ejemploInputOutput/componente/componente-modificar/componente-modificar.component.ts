import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-modificar',
  templateUrl: './componente-modificar.component.html',
  styleUrls: ['./componente-modificar.component.scss'],
})
export class ComponenteModificarComponent {
  @Output() productoModificado: EventEmitter<any> = new EventEmitter<any>();
  @Input() productoRecibido!: any;

 
  producto = {
    marca: '',
    precio: 0,
    stock: 0,
  };


  modificar() {
    this.productoModificado.emit(this.producto);
  }
}
