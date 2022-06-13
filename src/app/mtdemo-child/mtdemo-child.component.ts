import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mtdemo-child', //Name
  templateUrl: './mtdemo-child.component.html',
  styleUrls: ['./mtdemo-child.component.css']
})
export class MTDemoChildComponent implements OnInit {

  @Input() FirstNameChild :any;
  @Output() PassDataToParent = new EventEmitter<any>();



  constructor() { 


  }

  ngOnChanges(changes: SimpleChanges): void {
    // debugger
    // console.log("Callled ngOnChanges()");

    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
// debugger
    // alert(this.FirstNameChild);
  }
  
  ngOnDestroy(){
    debugger
    console.log("ngDestry Called");
  }
  PassDataToParentFunction(){
    debugger
    this.PassDataToParent.emit(this.FirstNameChild);

  }

}
