import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  userName:any = "Typescript";
  currency:any = "65453.098787878";
  currentDate:any = new Date();
  percentInput:any = '92';
  constructor() { }

  ngOnInit(): void {
    console.log('date ' + this.currentDate);
    
  }

}
