import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrToUsed'
})
export class InrToUsedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
   const [currentDollarvalue] = args;
   console.log(currentDollarvalue);
   
    return value*currentDollarvalue;
  }

}
