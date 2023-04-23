import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-listado',
  templateUrl: './componente-listado.component.html',
  styleUrls: ['./componente-listado.component.scss'],
})
export class ComponenteListadoComponent {
  @Input() listaRecibida!: any[];
  @Output() productoSelecionado: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  MostrarDetalle(producto: any) {
    this.productoSelecionado.emit(producto);
  }
}
