import { Directive, ElementRef } from '@angular/core';

// @ > Decorator

@Directive({
  selector: '[appBackgroudDirective]'
})
export class BackgroudDirectiveDirective {

  constructor(private e: ElementRef) { 
    debugger
    console.log(e)

  }

  ngOnInit(): void {
    debugger
    this.e.nativeElement.style.backgroundColor = 'red';
  }

}
