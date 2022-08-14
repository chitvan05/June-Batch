import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {

  constructor() { }

  ngIfProperty:boolean = true;
  tempVar:boolean = true;
  studentData:any = [
    {
      "rollNo":"B1",
      "name":"abc",
      "location":"pune"
    },
    {
      "rollNo":"B2",
      "name":"def",
      "location":"Nashik"
    },
    {
      "rollNo":"B3",
      "name":"pqr",
      "location":"mumbai"
    },
    {
      "rollNo":"B4",
      "name":"uvw",
      "location":"delhi"
    }
]
  ngOnInit(): void {

  setTimeout(() => {
    this.checkNgIF(6);
  }, 8000);

  }

  show(){
    this.ngIfProperty = true;
  }

  hide(){
    this.ngIfProperty = false;
  }

  checkNgIF(value:any){
    if(value == 5){
      this.tempVar = true;
    } else {
      this.tempVar = false;
    }
  }

  editInfo(value:any){
    console.log(value);
    console.log('data for selected row: '+ JSON.stringify(this.studentData[value]));
    
    
  }
}
