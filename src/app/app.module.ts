import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { StructuralComponent } from './Directives/structural/structural.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    DatabindingComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
