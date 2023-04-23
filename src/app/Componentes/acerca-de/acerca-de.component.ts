import { Component } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent {

  nombre:string="Mariano";
  apellido:string="Ovelar";
  edad:number=24;
}
