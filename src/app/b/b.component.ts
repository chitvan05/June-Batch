import { Component, OnInit } from '@angular/core';
import { FirstService } from '../Services/first.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  constructor(private service:FirstService  ) { }

  ngOnInit(): void {
    console.log(this.service.variableInService);
  }

}
