import { Component } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css']
})
export class DetalleRepartidorComponent{

  repartidorSeleccionado : Repartidor | any;

  constructor() { }

  tomarRepartidorParaMostrar(repartidor : Repartidor){
    this.repartidorSeleccionado = repartidor;
    console.log(this.repartidorSeleccionado);
  }


}
