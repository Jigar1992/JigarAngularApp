import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSMDirective]'
})
export class SMDirectiveDirective {

  constructor(private e : ElementRef) { 


  }

  ngOnInit(){
    console.log(this.e)
    // this.e.nativeElement.style.backgroundColor = 'red';


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
