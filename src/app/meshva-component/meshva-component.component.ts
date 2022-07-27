import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meshva-component',
  templateUrl: './meshva-component.component.html',
  styleUrls: ['./meshva-component.component.css']
})
export class MeshvaComponentComponent implements OnInit {

  
  IsVisible : boolean = true;
  FirstName : string = "Meshva dfdsf";
  List = []
  PhoneNUmber : number = 10;

  temp : any = 100;

  constructor() { }

  ngOnInit(): void {
  }


  clickEvent()
  {
      alert(this.FirstName)

  }

  inoutEvent(e : any){

    console.log(e);
  }
}
