import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})

export class ContactInfoComponent implements OnInit {

  contactInfo!: FormGroup;
  constructor(private builder: FormBuilder,private dataService: DataService ) { }

  pageTitle:any = "";
  ngOnInit(): void {
    this.pageTitle = this.dataService.dataServiceVariable;
    this.createForm();
  }

  createForm(){
    this.contactInfo = this.builder.group({
      'fullname': [''],
      'mobileNumber':[''],
      'email':[''],
      'address':[''],
    }) 
  }

  contactData(data:any){
    console.log(' data entered in form :' + JSON.stringify(data));
  }

}
