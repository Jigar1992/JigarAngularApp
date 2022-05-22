import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NIkunjServiceService } from '../services/nikunj-service.service';

@Component({
  selector: 'app-parent-nikunj',
  templateUrl: './parent-nikunj.component.html',
  styleUrls: ['./parent-nikunj.component.css']
})
export class ParentNikunjComponent implements OnInit {

  form : FormGroup;
  UserName : any = "jigarthakkar";
  submitted = false;
  StyleName = "red"
  isShow = true;
  // router: any;
  object : any = {};

  constructor(private formBuilder: FormBuilder,private router : Router,
    private acrpute : ActivatedRoute, private _service : NIkunjServiceService) { //Dependancy injection
    debugger
   }

  //  ngOnChanges(changes: SimpleChanges): void {
  //   debugger
  //   // throw new Error('Method not implemented.');
  // }

  ngOnInit(): void {
    debugger
    console.log("ngOnInit");

   let getData = this._service.GetList().then(success  =>{
    debugger
    this.object = success;
    let list = this.object.data;
    console.log(success);
    // Data received

  }).catch(error =>{

  })

    this.form = this.formBuilder.group(
      {
        FirstName: ['', Validators.required],
        Email: ['', [Validators.required, Validators.email]],
      });

  }

  ngDoCheck(){
    console.log("ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(){
    //  console.log(this.form.get("FIrstName")?.setValidators([Validators.minLength(1), Validators.maxLength(30)]))
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
  }

  hidechild(){
    this.UserName = "Nikunj";
    this.StyleName = "blue"
    // this.isShow = false;
  }

  GetEventValue(e:any){
    debugger
    this.UserName = e;
    console.log(e);
  }

  onSubmit(form : any){
      debugger
      if(!form.valid){
        this.submitted = true;
      }
      else{
        let object =  form.value; 
      }

      this.router.navigate(["/login"]);
      let abc = this.acrpute.snapshot.params['id']; 



  }
}
