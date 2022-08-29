import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  text:any = "Sample Text";
  inr:any = 20;
  commaReplaced:any = "hi my name is+ Aniket. i am topper"
  constructor() { }

  ngOnInit(): void {
  }

}
