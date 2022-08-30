import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      'fullname': ['',[Validators.required,Validators.maxLength(10),Validators.minLength(5) ]],
      'mobileNumber':['',[Validators.required,Validators.maxLength(10) ]],
      'email':['',Validators.required],
      'address':[''],
      'agreeCheckbox':['',Validators.requiredTrue],
      
    }) 

  }


  get f(): { [key: string]: AbstractControl } {
    return this.contactInfo.controls;
  }

  contactData(data:any){
    console.log(' data entered in form :' + JSON.stringify(data));
  }

}
