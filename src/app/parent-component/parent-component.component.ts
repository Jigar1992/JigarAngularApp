import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  FirstName : any = "shruti";
  constructor() { }


  ngOnInit(): void {

  }

  callParentEvent(e : any){
    debugger
    this.FirstName = e;
  }

}
