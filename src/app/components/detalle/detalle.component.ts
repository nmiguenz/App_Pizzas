import { Repartidor } from 'src/app/clases/repartidor';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  @Input() repartidorParaMostrar: Repartidor | any;

  constructor() { }

}
