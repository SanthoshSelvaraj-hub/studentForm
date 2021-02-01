import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:SignupComponent},
  {path:"form",component:FormComponent},
  {path:"signup",component:SignupComponent},
  {path: '404', component:NotfoundComponent},
 {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModules = [SignupComponent, FormComponent,NotfoundComponent]
