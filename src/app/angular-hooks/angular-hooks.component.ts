import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-angular-hooks',
  templateUrl: './angular-hooks.component.html',
  styleUrls: ['./angular-hooks.component.css']
})
export class AngularHooksComponent implements OnInit {

  constructor() { }
 

  @Input() element: any;
  isFirstNameVisible = true;
  FirstName = "";
  isChecked = true;
  firstNameColor = "jigar";

  //DB 
  listProperty : any = [];

  ngOnChanges(changes: SimpleChanges): void { ///First angular hook
    debugger;
    console.log("ngOnChanges Called");
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void { 
    //Component initialization
    //before HTML lead
    //List
    //get API
    this.listProperty = [
      {
        "FirstName": "jigar",
        "LastName": "Thakkar",
        "age": "30"
      },
      {
        "FirstName": "Shruti",
        "LastName": "Thakkar",
        "age": "30"
      },
      {
        "FirstName": "Anand",
        "LastName": "Thakkar",
        "age": "30"
      }
    ]

    console.log("ngOnInit Called");
  }

  click() {
    
    this.isFirstNameVisible = false;

  }

  clickShow() {

    this.isFirstNameVisible = true;

  }





  ngDoCheck(): void {
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
  }

  ngAfterContentChecked(event : any){
    console.log("ngAfterContentChecked called")
  }

  ngAfterViewInit(){
    
    console.log("ngAfterViewInit called")
  }

  ngAfterViewChecked(){
    
    console.log("ngAfterViewChecked called")
  }

  ngOnDestroy(){
    debugger
    console.log("ngOnDestroy called")
  }
}
