import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appKMDemo]'
})
export class KMDemoDirective {

  constructor(private element : ElementRef) { 


  }

  ngOnInit(){
    debugger
    console.log(this.element)

    // this.element.nativeElement.style.backgroundColor = "Yellow"
  }

  @HostListener('mouseenter') 
  c_onEnterrr() {
    this.element.nativeElement.style.backgroundColor = "yellow" ;
   }

   @HostListener('mouseleave') 
  c_onEnterrr1() {
    this.element.nativeElement.style.backgroundColor = "red" ;
   }


  
}
