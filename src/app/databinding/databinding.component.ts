import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  username:any = 'Aniket and i am very very Talented';
  address:any = 'I am topper from Nagar';
  imgurl:any = "../../assets/images/download.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(){
    console.log('click event');
  }

  inputEvent(value:any){
    console.log('input event: ' + value);
  }

  blurEvent(){
    console.log('blur event');
  }
  
  focusEvent(){
    console.log('focus event');
  }

  changeEvent(value?:any){
    console.log('change event: ' + JSON.stringify(value) );
  }
}
