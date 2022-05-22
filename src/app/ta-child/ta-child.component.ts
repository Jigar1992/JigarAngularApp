import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ta-child',
  templateUrl: './ta-child.component.html',
  styleUrls: ['./ta-child.component.css']
})
export class TAChildComponent implements OnInit, OnChanges {

  @Input() Tejas: any; /////// input()
  @Output() PassDataToParent = new EventEmitter<any>();

  age : number = 10;

  constructor() { 

  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    console.log(changes);
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    debugger
    alert( "Child component : " +this.Tejas)
  }

  PassToParentClick(){
    let abc = "Angular 1234";
    let abc1 = "Angular 1234";
    this.PassDataToParent.emit(abc);
  }

  ngOnDestroy(){
    debugger
    alert("ngOnDestroy called")
    console.log("ngOnDestroy called")
  }

}
