import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirstService } from '../Services/first.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
 
  
  constructor(private service : FirstService  , private router : Router ) { }

  minutes:any = 60;
  numberArray:any = [];

  ngOnInit(): void {

  //  this.numberArray = [4,5];
   // this.calculator(this.numberArray);
    // this.andOperator();

    this.service.functionInService();
  }

  calculator(data:any){

    if(data == '' || data == undefined || data == null || data.length == 0){
      console.log('data not valid for calulation ');
      
    } else {
      console.log('data is proper');
      
    }
////////////////////////////////////////////////////////////
    if(data != '' || data != undefined || data != null || data.length != 0){
      console.log('data is proper');
    } else {
      console.log('data not valid for calulation ');
    }
  }

  andOperator(){
    let a = 5;
    let b = 7;

    if(a == 5 && b == 6 ){
      console.log('condition satisfied ');
    }

    let obj = {
      "name":"virat",
      "age":"32",
      "country":"india"
    }

    

    let objKeys =  Object.keys(obj);
    let objValue =  Object.values(obj);

   // console.log(' obj keys :' + objKeys);
    //console.log(' obj values :' + objValue);
    

  }

  gotoB(){
    console.log('goto b fun called ');
    this.router.navigateByUrl('compB');
  }

}
