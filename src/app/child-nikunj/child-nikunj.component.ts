import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child-nikunj',
  templateUrl: './child-nikunj.component.html',
  styleUrls: ['./child-nikunj.component.css']
})
export class ChildNikunjComponent implements OnInit,OnChanges {


  @Input() elementValue :any;
  @Output() outPutElement = new EventEmitter();


  

  constructor() { 


  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    // console.log(this.elementValue)
  }

  
  PassValueToParent(){
    debugger
    this.elementValue = "Nikunj Patel";
    this.outPutElement.emit(this.elementValue)
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called from child component")
  }

}
