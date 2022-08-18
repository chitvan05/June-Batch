import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent implements OnInit {

  textColor:any = 'green'
  constructor() { }

  ngOnInit(): void {
  }

  red(){
    this.textColor = 'red';
  }
  green(){
    this.textColor = 'green';
  }
}
