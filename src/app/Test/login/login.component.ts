import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private service:CommonService) { }

  ngOnInit(): void {
  }

  setNameValue(value:any){
    console.log(value);
    this.service.loggedUserName = value;
  }

  redirectToDashboard(){
    this.router.navigateByUrl('dashboard');
  }
}
