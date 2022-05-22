import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-child-jay-component',
  templateUrl: './child-jay-component.component.html',
  styleUrls: ['./child-jay-component.component.css']
})
export class ChildJayComponentComponent implements OnInit, OnChanges {

  @Input() firstNameFromParent : any; ///Attribute

  @Output() emitToParent = new EventEmitter<any>();

  constructor() { 
    debugger
    console.log("constructor")
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    console.log("ngOnChanges")
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    debugger
    console.log("ngOnInit")
    this.firstNameFromParent;
  }

  passDataToParent()
  {
    debugger

    this.emitToParent.emit(this.firstNameFromParent);

  }

  ngOnDestroy(){
    debugger
    console.log("ngOnDestroy")
  }


}
