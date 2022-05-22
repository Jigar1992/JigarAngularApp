import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent-jay-component',
  templateUrl: './parent-jay-component.component.html',
  styleUrls: ['./parent-jay-component.component.css']
})
export class ParentJayComponentComponent implements OnInit {

  firstName : any = "Jigar Thakkar";
  disabled = false;
  isVIew = true;

  @ViewChild("childComponent")
  child!: ElementRef;

  constructor() {
    debugger
    console.log("constructor")
     // First

   }

  ngOnInit(): void {
    debugger
    console.log("ngOnInit")
    //After constructor
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
    //After constructor
  }

  ngAfterContentInit(){
    console.log("ngAfterContentViewInit")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }

  
  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }



  getfirstName() {

    debugger

    this.isVIew = false;
  }

  emitToParentCall(e:any)
  {
    debugger
    alert(e);
  }

 


}
