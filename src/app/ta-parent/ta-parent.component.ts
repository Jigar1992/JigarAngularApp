import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-ta-parent', // <app-ta-parent></app-ta-parent>
  templateUrl: './ta-parent.component.html',
  styleUrls: ['./ta-parent.component.css']
})
export class TAParentComponent implements OnInit,DoCheck {

  idText  = "txtInput"
  FirstName : any = "";
  LastName : any = "";
  isVisible = true;
  list = [
    {
      
      FirstName : "Jigar1",
      LastName : "Thakkar2"
    },
    {
      FirstName : "Tejas3333",
      LastName : "Jivani33"
    }
  ]
  // LastName : string = "JIgar";

  constructor() { 
    debugger
  }

  ngOnInit(): void { //Initialization
    debugger
    console.log("ngOnInit Called")
  }

  ngDoCheck()
  {
    console.log("ngDoChecks Called")
  }

  SaveRecord()
  {
    debugger
    
    let obj = {
      FirstName : this.FirstName,
      LastName : this.LastName
    }
    this.list.push(obj)
    

  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
  }

  ngAfterContentChecked(event : any){
    console.log("ngAfterContentChecked called")
  }


  ParentComponentEvent(e : any){
    debugger
    alert(e);
  }

  

}
