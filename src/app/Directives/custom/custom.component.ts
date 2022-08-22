import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let age = 16;
    let text = '';
   
    if(age >= 18){
      text = 'adult';
    } else {
      text = 'teen';
    }

    console.log(text);
    
    let text2;

    text2 = (age >= 18) ? "Adult" : "Teen";

    console.log(text2);

    //if else if else

    
    let text3;

    text3 = (age > 18) ? "Adult" : age == 18  ? "teen" : "kids";

    console.log(text3);

    

  }

}
