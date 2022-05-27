import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-child-jay-component',
  templateUrl: './child-jay-component.component.html',
  styleUrls: ['./child-jay-component.component.css']
})
export class ChildJayComponentComponent implements OnInit, OnChanges {

  // @Input() firstNameFromParent : any; ///Attribute

  // @Output() emitToParent = new EventEmitter<any>();
  // @Input() firstNameFromParent : any; ///Attribute
  // @Output() emitToParent = new EventEmitter<any>();
  form: FormGroup;
  submitted = false;
  


  constructor(private fd : FormBuilder,private router:Router) { 
    debugger
    console.log("constructor")
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger
    console.log("ngOnChanges")
    // throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    debugger
    this.form = this.fd.group(
      {
        fullname: [''], //Form Control Name
        email: ['', [Validators.required, Validators.email]],
      });


    //   this.form.get('fullname')?.errors
    // console.log("ngOnInit")
    // this.firstNameFromParent;
  }

  onSubmit(form  :any){
debugger
   
  if(!this.form.valid){
    this.submitted = true;
  }
  else{
    let model = this.form.value;
  }

  this.router.navigate(["/login"]);
  }

  passDataToParent()
  {
    debugger

    // this.emitToParent.emit(this.firstNameFromParent);

  }

  ngOnDestroy(){
    debugger
    console.log("ngOnDestroy")
  }


}
