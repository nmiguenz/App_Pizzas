import { Component, EventEmitter, Output } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent {

  arrayPaises: [] | any;
  @Output() paisSeleccionado : EventEmitter<any> = new EventEmitter<any>()

  constructor(private http: HttpService) {

    http.getArrayPaisesEurope().subscribe((listaPaises)=>{
      this.arrayPaises = listaPaises;
    });

    http.getArrayPaisesAfrica().subscribe((listaPaises: [] | any)=>{
      listaPaises.map((pais:any) =>{
        if(this.arrayPaises)
          this.arrayPaises.push(pais);
      });
    });

    console.log(this.arrayPaises)
  }

  getPaisSeleccionado(pais: [] | any ){
    this.paisSeleccionado.emit(pais);
  }

}
