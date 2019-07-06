import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartPizzaComponent } from './add-cart-pizza.component';

describe('AddCartPizzaComponent', () => {
  let component: AddCartPizzaComponent;
  let fixture: ComponentFixture<AddCartPizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCartPizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
