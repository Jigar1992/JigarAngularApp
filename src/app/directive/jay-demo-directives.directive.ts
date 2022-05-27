import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appJayDemoDirectives]'
})
export class JayDemoDirectivesDirective {

  constructor(private e : ElementRef) 
  { 
      debugger
      console.log(e);
  }

  ngOnInit()
  {
    this.e.nativeElement.style.backgroundColor = "blue";
  }

  @HostListener('mouseenter') 
  c_onEnterrr() {
    this.e.nativeElement.style.backgroundColor = "yellow" ;
   }

   @HostListener('mouseleave') 
  c_onEnterrr1() {
    this.e.nativeElement.style.backgroundColor = "red" ;
   }


}
