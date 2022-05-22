import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDemoDirective]'
})
export class DemoDirectiveDirective {

  @Input() inputElement : any; 

  constructor(private el: ElementRef) { 
  }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = 'yellow';
     debugger
     // Use renderer to render the emelemt with styles
     console.log(this.inputElement)
     console.log(this.el);
    //  if(this.myHidden) {
    //      console.log('hide');
    //      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    //  }
  }

}
