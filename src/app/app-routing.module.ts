import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
 { path:'',
  component:LayoutComponent,

  loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
},



{ path:'',
  component:LayoutComponent,

  children:[

{path:'contact-us',component:ContactComponent},
]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
