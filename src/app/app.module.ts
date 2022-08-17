import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { StructuralComponent } from './Directives/structural/structural.component';
import { LoginComponent } from './Test/login/login.component';
import { DashboardComponent } from './Test/dashboard/dashboard.component';
import { PipeComponent } from './Pipes/pipe/pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    DatabindingComponent,
    StructuralComponent,
    LoginComponent,
    DashboardComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
