import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbService } from 'src/app/servicios/db.service';
import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css']
})
export class ModificarPizzaComponent {

  modificarPizzaGroup : FormGroup | any;
  @Input() inputPizza : Pizza | any;

  constructor(private fb : FormBuilder, private db : DbService) {

    this.modificarPizzaGroup = this.fb.group({
      'nombre' : ['',[Validators.required]],
      'ingredientes' : ['',[Validators.required]],
      'precio' :[0,[Validators.required, Validators.min(500)]],
      'peso' :[0,[Validators.required, Validators.min(500), Validators.max(1000)]],
    });

  }

  modificarPizza(){
    this.db.update('Pizzas', this.inputPizza.id, this.modificarPizzaGroup.value)
    .then(()=>{
      this.inputPizza = null
      alert('Se modificó una Pizza.');
    })
    .catch((error) =>{
      alert('No se modificó la pizza por ' + error)
    });
  }

}
