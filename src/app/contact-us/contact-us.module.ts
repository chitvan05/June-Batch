import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
