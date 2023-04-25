import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-detalle',
  templateUrl: './componente-detalle.component.html',
  styleUrls: ['./componente-detalle.component.scss'],
})
export class ComponenteDetalleComponent {
  @Input() productoRecibido!: any;

  limpiar(){
    
  }
}
