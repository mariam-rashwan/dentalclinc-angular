import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardHomeComponent } from './card-home/card-home.component';



const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
];
@NgModule({
  declarations: [
    HomeCarouselComponent,
    HomeComponent,
    CardHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class HomeModule { }
