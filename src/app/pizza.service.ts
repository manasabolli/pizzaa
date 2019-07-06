import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Pizza } from './pizza/pizza';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  uri='http://localhost:4000/pizza'
  constructor(private httpClient:HttpClient) { }


  getPizzas():Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/allPizza');
   }

  addPizza(type,name,cost){
    let Pizza={
      PizzaType:type,
      PizzaName:name,
      PizzaCost:cost
    }
    return this.httpClient.post(`${this.uri}`+'/addPizza',Pizza)
    .subscribe(res=>console.log("New Pizza is added to our database"));
  }
}
