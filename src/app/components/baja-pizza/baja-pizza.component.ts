import { DbService } from './../../servicios/db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-baja-pizza',
  templateUrl: './baja-pizza.component.html',
  styleUrls: ['./baja-pizza.component.css']
})
export class BajaPizzaComponent {

  @Input() inputPizza : Pizza | any;
  deletePizzaGroup : FormGroup | any;

  constructor(private fb : FormBuilder, private db: DbService) {
    this.deletePizzaGroup = this.fb.group({
      'nombre' : ['',[Validators.required]]
    });
  }

  deletePizza(){
    this.db.delete('Pizzas', this.inputPizza.id)
    .then(()=>{
      this.inputPizza = null
      alert('Se eliminó una Pizza.');
    })
    .catch((error) =>{
      alert('No eliminó la pizza por ' + error)
    });
  }

}
