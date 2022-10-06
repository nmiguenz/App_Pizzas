import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DbService } from 'src/app/servicios/db.service';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent{

  @Output() pizzaNueva : EventEmitter<any>= new EventEmitter<any>();
  altaPizzaGroup : FormGroup | any;

  constructor(private fb : FormBuilder, private db : DbService) {
    this.altaPizzaGroup = this.fb.group({
      'nombre' : ['',[Validators.required]],
      'ingredientes' : ['',[Validators.required]],
      'precio' :[0,[Validators.required, Validators.min(500)]],
      'peso' :[0,[Validators.required, Validators.min(500), Validators.max(1000)]],
    });
   }

   async altaPizza(){
    let pizza : Pizza | any = this.altaPizzaGroup.value;

    await this.db.alta(pizza, 'Pizzas')
    .then((res: any)=>{
      pizza['id'] = res.id; //Le asigno el ID para poder modificarlo rápidamente
      this.altaPizzaGroup.reset();
      this.nuevaPizzaEmit(pizza);
      alert('Se dio de alta una Pizza.');
    })
    .catch((error) =>{
      alert('No se dio de alta la pizza por ' + error)
    });
  }

  nuevaPizzaEmit(pizza: Pizza | any){
    this.pizzaNueva.emit(pizza);
  }

}
