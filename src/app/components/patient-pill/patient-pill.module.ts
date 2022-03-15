import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardPayComponent } from './credit-card-pay/credit-card-pay.component';
import { RouterModule, Routes } from '@angular/router';
import { PillComponent } from './pill/pill.component';


const routes: Routes = [
  {path:'creditcard',component:CreditCardPayComponent },

];


@NgModule({
  declarations: [
    CreditCardPayComponent,
    PillComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PatientPillModule { }
