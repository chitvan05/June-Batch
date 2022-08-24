import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreRoutingModule } from './more-routing.module';
import { MoreInfoComponent } from './more-info/more-info.component';


@NgModule({
  declarations: [
    MoreInfoComponent
  ],
  imports: [
    CommonModule,
    MoreRoutingModule
  ]
})
export class MoreModule { }
