import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayTableComponent } from './display-table/display-table.component'

const routes: Routes = [
  {
    path:'', component:FormComponent
  },
  {
   
    path:'display', component:DisplayTableComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
