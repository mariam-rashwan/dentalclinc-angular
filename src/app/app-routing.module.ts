import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';
import { PatientPillComponent } from './components/patient-pill/patient-pill.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
 { path:'',
  component:LayoutComponent,

  loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
},
{ path:'',
  component:LayoutComponent,

  children:[

{path:'contact-us',component:ContactComponent},
{path:'appointment-form',component:AppointmentFormComponent},
{path:'service',component:ServiceComponent},
{path:'patient-pill',component:PatientPillComponent},
{path:'about',component:AboutComponent},





]},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
