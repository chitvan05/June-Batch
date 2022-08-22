import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  textColor:boolean = true;
  constructor() { }

  ngOnInit(): void {


    // setTimeout(() => {
    //   this.textColor = false;
    // }, 10000);

    setInterval(()=>{
      
      this.textColor = !this.textColor;
      
    },5000)
  }

  red(){
    //this.textColor = 'red';
  }
  green(){
    //this.textColor = 'green';
  }
}
