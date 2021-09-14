import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { DisplayTableComponent } from './display-table/display-table.component'
import { DisplayTwoComponent } from './display-two/display-two.component';
import { DisplayThreeComponent } from './display-three/display-three.component';

const routes: Routes = [
  {
    path:'', component:FormComponent
  },
  {
   
    path:'display', component:DisplayTableComponent
  },
  {
    path:'display-two', component:DisplayTwoComponent
  },
  {
    path:'display-three', component:DisplayThreeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
