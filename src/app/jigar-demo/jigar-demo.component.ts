import { Component, OnChanges, OnInit, SimpleChanges,Input, ViewChild, ElementRef, OnDestroy, HostListener } from '@angular/core';
import { AbstractControl, FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { ShrutiComponentComponent } from '../shruti-component/shruti-component.component';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import {BaseService} from '../services/base.service'
import { Product } from '../services/product';
import { StrutiDemoService } from '../services/struti-demo.service';

@Component({
  selector: 'app-jigar-demo',
  templateUrl: './jigar-demo.component.html',
  styleUrls: ['./jigar-demo.component.css']
})
export class JigarDemoComponent implements OnInit,OnChanges {

  @Input() inputElement  = "jigar Thakkar";
  products: Product[] = [];
  data= "1";
  FirstName :any;
  Isvisible  = true;
  form: FormGroup;
  submitted = false;
  @ViewChild("firstName") firstName : ElementRef;
  formBuilder: any;
  array: any = [];
  currentDate = new Date();
  amount = 100;


  LastName: any = "NIkunj";
  // @ViewChild("appshruticomponent") appshruticomponent : ShrutiComponentComponent;
  
  // ngAfterViewInit(){
  //   this.firstName.nativeElement.value = "Jigar";
  // }

 
  constructor(private baseService : BaseService, private _shrutService: StrutiDemoService) { //First called

    
  }
  
 

  ngOnChanges(changes: SimpleChanges): void {  //Second called
    console.log("Called");
  } 


  

  ngOnInit(): void {
    debugger
    let GetAllRecords = this._shrutService.getAll();
    debugger
    this.array=[
      {
        id:1,
        FirstName:"Jigar",
        LastName:"Thakkar"
      },
      {
        id:2,
        FirstName:"Shruti",
        LastName:"Gogna"
      },
      {
        id:3,
        FirstName:"Anand",
        LastName:"Thakkar"
      }
    ]

    let getLastElement = this.array[this.array.length - 1];
    

    let obj = {
      id: getLastElement.id + 1,
      FirstName:"Anand",
      LastName:"Thakkar"
    }

    this.array.push(obj)


  


debugger

    this.baseService.getMethod().then(success =>{
      debugger
      console.log(success);
    }).catch(error => {

    })

    this.baseService.getAll().subscribe((data: Product[])=>{
      console.log(data);
      this.products = data;
    })  
   
    // this._http.get(this._apiUrl + url, { headers: headers, params: data })
    //       .subscribe(data => { resolve(data) }, error => { this.showServerError(error) })

    // this.http.get("http://localhost:3000/book-module")
    // .subscribe({
    //   next: (v) =>{
    //     console.log(v)
    //   } ,
    //   error: (e) => {
    //     console.error(e)
    //   },
    //   complete: () =>{
    //     console.info('complete')
    //   } 
  // })

         

    // this.form = this.formBuilder.group(
    //   {
    //     fullname: ['', Validators.required],
    //     username: [
    //       '',
    //       [
    //         Validators.required,
    //         Validators.minLength(6),
    //         Validators.maxLength(20)
    //       ]
    //     ],
    //     email: ['', [Validators.required, Validators.email]],
    //     password: [
    //       '',
    //       [
    //         Validators.required,
    //         Validators.minLength(6),
    //         Validators.maxLength(40)
    //       ]
    //     ],
       
    //     acceptTerms: [false, Validators.requiredTrue]
    //   },
      
    // );
  }

  ngDoCheck(){
    console.log("ngDoCheck called")
  }

  onClickEvent() {

    console.log(this.LastName);
  }


  ngAfterContentInit(){
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called")
  }

  clickevent(){
    // this.Isvisible = false;
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called")
  }

  // ngOnDestroy(){
  //   debugger
 
  // }



 


  changeEvent(e : string){
    debugger
    console.log(e);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
