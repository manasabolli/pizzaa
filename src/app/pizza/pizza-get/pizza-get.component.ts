import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza.service';

@Component({
  selector: 'app-pizza-get',
  templateUrl: './pizza-get.component.html',
  styleUrls: ['./pizza-get.component.css']
})
export class PizzaGetComponent implements OnInit {
 Pizzas: Pizza[]=[];
  constructor( private route: ActivatedRoute,
    private service:PizzaService) { }

  ngOnInit() {
    this.service.getPizzas()
    .subscribe(PizzaList=>this.Pizzas=PizzaList);
  }

}
