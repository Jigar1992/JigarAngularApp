import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input("element123") element : any;

  @Output() outPutEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {


  }

  callParentEmit(){
    debugger
    this.outPutEvent.emit("Thakkar");
  }



}
