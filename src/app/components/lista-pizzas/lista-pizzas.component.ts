import { DbService } from './../../servicios/db.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-lista-pizzas',
  templateUrl: './lista-pizzas.component.html',
  styleUrls: ['./lista-pizzas.component.css']
})
export class ListaPizzasComponent implements OnInit {

  listadoPizzas : Pizza[] =  [];
  @Output() pizzaSelecionada : EventEmitter<Pizza> = new EventEmitter<Pizza>();

  constructor(private db : DbService) {}

  ngOnInit(): void {
    //Listado de pizzas
    this.db.getCollection('Pizzas')
    .then((res:any)=>{
      res.subscribe((ref:any)=>{
        this.listadoPizzas = ref.map((element:any) => {
          let pizza = element.payload.doc.data();
          pizza['id'] = element.payload.doc.id;
          return pizza;
        });
      })
    })
    .catch(error=>console.log(error));
  }

  seleccionPizzaEmit(pizza: Pizza){
    this.pizzaSelecionada.emit(pizza);
    console.log(pizza)
  }

}
