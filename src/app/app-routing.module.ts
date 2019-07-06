import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaAddComponent } from './pizza/pizza-add/pizza-add.component';
import { PizzaGetComponent } from './pizza/pizza-get/pizza-get.component';

const routes: Routes = [
  {path:"pizza",component:PizzaGetComponent},
  {path:"pizza/create",component:PizzaAddComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
