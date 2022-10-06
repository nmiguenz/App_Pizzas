import { DbService } from './../../servicios/db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-alta-primera',
  templateUrl: './alta-primera.component.html',
  styleUrls: ['./alta-primera.component.css']
})
export class AltaPrimeraComponent implements OnInit {

  repartidorGroup : FormGroup | any;
  nacionalidad : {} | any;
  bandera : string = '';

  constructor(private fb: FormBuilder, private db: DbService) {

    this.repartidorGroup = this.fb.group({
      'dni' : ['',[Validators.required, Validators.max(50000000)]],
      'nombre' : ['',[Validators.required]],
      'edad' : ['',[Validators.required, Validators.min(18)]],
      'capacidadTransporte' : ['',[Validators.required,Validators.min(1)]],
      'nacionalidad': ['',[Validators.required]],
      'unidadPropia' : ['',[Validators.required]]
    });

   }

  ngOnInit(): void {
  }

  obtenerNacionalidadRepartidor(paisSeleeccionado : any){
    this.nacionalidad = paisSeleeccionado;
    this.repartidorGroup.controls.nacionalidad.setValue(paisSeleeccionado.translations.spa.common);
    this.bandera = this.nacionalidad.flags.png;
  }

  async altaRepartidor(){
    let repartidor : Repartidor = this.repartidorGroup.value;
    console.log(repartidor);

    repartidor.nacionalidad = this.nacionalidad;

    let res = await this.db.alta(repartidor, 'repartidor');

    if (res){
      this.repartidorGroup.reset();
      alert('Se dio de alta el repartidor.');
    }
    else
      alert('No se dio de alta el repartidor.');
  }

}
