import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { DbService } from 'src/app/servicios/db.service';

@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css']
})
export class ListadoRepartidorComponent implements OnInit {

  listadoRepartidor : Repartidor[] = [];
  @Output() repartidorSeleccionado : EventEmitter<any>= new EventEmitter<any>();


  constructor(private db :DbService) { }

  ngOnInit(): void {
    this.db.getCollection('repartidor').then( (ref:any) => ref.subscribe((listadoRef:any) => {
      listadoRef.forEach((element : any) => {
        this.listadoRepartidor.push(element.payload.doc.data());
      });
   }));
  }

  getRepartidorSeleccionado(detalleProd: Repartidor){
    this.repartidorSeleccionado.emit(detalleProd);

  }

}
