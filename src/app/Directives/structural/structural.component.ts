import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  constructor() { }

  ngIfProperty:boolean = true;
  studentData:any = [
    {
      "rollNo":"1",
      "name":"abc",
      "location":"pune"
    },
    {
      "rollNo":"2",
      "name":"def",
      "location":"Nashik"
    },
    {
      "rollNo":"3",
      "name":"pqr",
      "location":"mumbai"
    },
    {
      "rollNo":"4",
      "name":"uvw",
      "location":"delhi"
    }
]
  ngOnInit(): void {
  }

  show(){
    this.ngIfProperty = true;
  }

  hide(){
    this.ngIfProperty = false;
  }
}
