import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidationDirective } from '../directive/custom-validation.directive';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor(public fb : FormBuilder, public router : Router,
     public activatedRoute : ActivatedRoute) { }

  // Registationform: FormGroup ;
  isSubmit = false;
  isShow = false;
  FirstName = "TEJAS";
  color = "blue";
  categoryList : any = [
    {
      id:5,
      FirstName : "Jigar",
      LastName  :"Thakkar"
    },
    {
      id:6,
      FirstName : "Tejas",
      LastName  :"Patel"
    },
    {
      id:7,
      FirstName : "Abdull",
      LastName  :"Khan"
    },
    {
      id:8,
      FirstName : "Anand",
      LastName  :"Thakkar"
    },

  ];

  testField = new FormControl('');
  registerForm: FormGroup;

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      //firstname: ['', Validators.required],
      // ...
      creditcardnumber: ['', CustomValidationDirective.validateCcNumber]
   });
    // this.testField = new FormControl("", customValidator)
  
  }


  onSubmit(){
    debugger

    this.router.navigate(["/jayPage"]);
    
    this.activatedRoute.snapshot.params['id']; 

    // let checktouch = this.Registationform.get('fullname')?.touched;
    // this.Registationform.get('fullname')?.removeValidators([Validators.required]);

    // this.Registationform.get('fullname')?.addValidators([Validators.required]);

    // if(!this.Registationform.valid)
    // {
    //   this.isSubmit = true;
    // }
  }

}

// function strLength(control: AbstractControl): {[key: string]: any} | null  {

//   // toString() : 
//   if (control.value && (control.value.length != 10) || (!/^([^0-9]*)$/.test(control.value))) {
//     return { 'customValidator': {"valid":true} };
//   }
//   return { 'customValidator': { "valid": false }  };
// }

