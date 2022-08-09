import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  variableInService:any = "came from service";

  constructor() { }

  functionInService(){
    console.log('function from service called ');   
  }
}
