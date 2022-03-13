import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
 { path:'',
  // component:LayoutComponent,

  loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
},
{path:'contact-us',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
