import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @Input('appCustomDirective') value : any;
  constructor(private elementRef: ElementRef) { 
  }

  @HostListener('keyup') onKeyUp(){
    console.log(' in directive  ' + this.elementRef.nativeElement.value);
    let inputValue = this.elementRef.nativeElement.value;

    if(inputValue){
      this.elementRef.nativeElement.style.backgroundColor = "red";
    } else {
      this.elementRef.nativeElement.style.backgroundColor = "white";
    }

    
  }

}
