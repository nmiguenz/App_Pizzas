import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-salen-pizzas',
  templateUrl: './salen-pizzas.component.html',
  styleUrls: ['./salen-pizzas.component.css']
})
export class SalenPizzasComponent{

  pizzaSeleccionada : Pizza | any;

  constructor() { }

  getPizza(pizza : Pizza){
    this.pizzaSeleccionada = pizza;
  }

}
