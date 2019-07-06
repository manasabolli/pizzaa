import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaAddComponent } from './pizza/pizza-add/pizza-add.component';
import { PizzaGetComponent } from './pizza/pizza-get/pizza-get.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCartPizzaComponent } from './pizza/add-cart-pizza/add-cart-pizza.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaAddComponent,
    PizzaGetComponent,
    AddCartPizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
