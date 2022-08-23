import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { HomeComponent } from './home/home.component';

console.log('lazy loading module loaded ');

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule {
  
}
 
