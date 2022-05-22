import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNikunjDirectives]'
})
export class NikunjDirectivesDirective implements OnInit {

  constructor(private el: ElementRef) { 
    debugger
    console.log(el)
  }

  ngOnInit(): void {
    debugger
    console.log(this.el)
    this.el.nativeElement.style.backgroundColor = "yellow";
  }

}
