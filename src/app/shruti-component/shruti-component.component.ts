import { Component, Input, OnChanges, OnInit, SimpleChanges, Output, EventEmitter, ViewChild, ElementRef }
 from '@angular/core';

 import { StrutiDemoService } from '../services/struti-demo.service';

@Component({
  selector: 'appshruticomponent', 
  templateUrl: './shruti-component.component.html',
  styleUrls: ['./shruti-component.component.css']
})
export class ShrutiComponentComponent implements OnInit {

  color = "red";
  @ViewChild('lastname') lastname: ElementRef<HTMLInputElement>;

  title : any = [];
  firstName : any = "";
  Lastname : any = "";
  Ischecked : any = true;
  isVisible = true;
  Ischecked_New : boolean = true;

  onChangeValueCheck = "Shruti";
  list : any = [];

  inputElement:any;
  @Input() element: any;
  @Output() changeDataEvent = new EventEmitter<string>();

  // list : any = [];  

  constructor(private _shrutService: StrutiDemoService) { ///Dependent

  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("")
    // throw new Error('Method not implemented.');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(this.element);
  // }
  ngOnInit(): void {

    debugger
    this._shrutService.getAllRecords().then(success =>{
      debugger
      console.log(success);
      let getObject : any = success;
      this.list = getObject.data;

    }).catch(error =>{

    })

//     let a = "10";
// debugger
//     this.lastname.nativeElement.value = "jigar Thakkar";
  }

  
  ngAfterViewInit(): void {
    debugger
    this.lastname.nativeElement.value = "jigar Thakkar";
  }

  onClickShruti() {
    this.isVisible = false;
    // alert(this.firstName)
    // alert(this.Lastname)
    // debugger
    // alert(1);
    // var a = (<HTMLInputElement>document.getElementById("txtName")).value;

  }


  onKey(e : any) {
    debugger
    console.log(e);

    this.firstName = "jigar";
  }
  
  keydownEnter(e:any){
    debugger
    console.log();

    
  }

  // PassDate(e :any)
  // {
  //   debugger
  //   this.changeDataEvent.emit("Hello")
  // }


  // ngOnDestroy(): void {
  //   console.log(1);
  // }

  // getList()
  // {
    
  //     this.list = [
  //       { FirstName : "Jigar" },
  //       { LastName : "Thakkar" },
  //       { Age : 12 }

  //     ]

  //     return this.list ;
      
  // }

}
