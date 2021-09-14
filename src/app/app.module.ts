import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DisplayTableComponent } from './display-table/display-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayTwoComponent } from './display-two/display-two.component';
import { DisplayThreeComponent } from './display-three/display-three.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DisplayTableComponent,
    DisplayTwoComponent,
    DisplayThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
