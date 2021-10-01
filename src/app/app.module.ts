import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ControlValueAccessorComponent } from './control-value-accessor/control-value-accessor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule , ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, ControlValueAccessorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
