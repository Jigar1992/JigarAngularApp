import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor(public fb : FormBuilder, public router : Router,
     public activatedRoute : ActivatedRoute) { }

  Registationform: FormGroup ;
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

  ngOnInit(): void {

    this.Registationform = this.fb.group(
      {
        fullname: [''], //Form Control Name
        email: ['', [Validators.required, Validators.email]],
      });


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
