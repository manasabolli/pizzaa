import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PizzaService } from 'src/app/pizza.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {
  angForm:FormGroup;

  constructor(private fb:FormBuilder, private service:PizzaService) { 
    this.createForm();
  }

  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      PizzaType:['',Validators.required],
      PizzaName:['',Validators.required],
      PizzaCost:['',Validators.required]
    });
  }

  addPizza(PizzaType, PizzaName,  PizzaCost){
    console.log(PizzaType+" "+PizzaName+" "+ PizzaCost)
    this.service.addPizza( PizzaType, PizzaName, PizzaCost);
    
      
  }

}
