import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mtdemo',
  templateUrl: './mtdemo.component.html',
  styleUrls: ['./mtdemo.component.css']
})
export class MTDemoComponent implements OnInit {

  FirstName : any = "Jigar";
  LastName : any = "Mayank dgdgfgf";
  isShow = true;
  styleValue = "Gray";
  list=[
    {
      FirstName : "Mayank",
      LastName : "Thakkar",
    },
    {
      FirstName : "Karan",
      LastName : "Patel",
    }
    ,
    {
      FirstName : "Jigar",
      LastName : "Thakkar",
    }
  ]


  constructor() { }

  ngOnInit(): void { // When component load
    console.log("called ngOnInit()");
  }

  ngDoCheck(){
    console.log("called ngDoCheck()");
  }

  ngAfterContentInit(){
    console.log("called ngAfterContentInit()");
  }

  ngAfterContentChecked(){
    console.log("called ngAfterContentChecked()");
  }

  ngAfterViewInit(){
    console.log("called ngAfterViewInit()");
  }

  ngAfterViewChecked(){
    let a = 10;
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

    console.log("called ngAfterViewChecked()");
  }


  save()  
  { 
    debugger
    let a = {
      FirstName : "Raaj",
      LastName  : "Patel"
    }
    this.list.push(a);
    // alert(this.FirstName);
    this.isShow = false;

  }

  getDataFromChild(data:any){
    debugger
    console.log(data);

    this.FirstName = data;

  }
}
