import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardPayComponent } from './credit-card-pay.component';

describe('CreditCardPayComponent', () => {
  let component: CreditCardPayComponent;
  let fixture: ComponentFixture<CreditCardPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditCardPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
