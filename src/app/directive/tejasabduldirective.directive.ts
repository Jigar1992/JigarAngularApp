import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ //Decoratior
  selector: '[appTejasabduldirective]'
})
export class TejasabduldirectiveDirective {

  constructor(public element : ElementRef) { 


  }

  @HostListener('keydown', ['$event']) onKeyDown(event:KeyboardEvent) {
    if (event.keyCode>32 && event.keyCode<128)
   {
    debugger
    this.element.nativeElement.value = event.key.toUpperCase();
      // event.target['value']+=event.key.toUpperCase();
      // event.preventDefault(); //stop propagation
      // //must create a "input" event, if not, there are no change in your value
      // var evt = document.createEvent("HTMLEvents");
      // evt.initEvent("input", false, true);
      // event.target.dispatchEvent(evt);
    }

  }
  ngOnInit(){
    debugger
    this.element.nativeElement.style.backgroundColor = "gray";
  }

}
