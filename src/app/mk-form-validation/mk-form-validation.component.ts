import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KMDemoServiceService } from '../services/km-demo-service.service';

@Component({
  selector: 'app-mk-form-validation',
  templateUrl: './mk-form-validation.component.html',
  styleUrls: ['./mk-form-validation.component.css']
})
export class MKFormValidationComponent implements OnInit {

  form : FormGroup;
  submitted  = false;
  constructor(private fb : FormBuilder, private router : Router, private service: KMDemoServiceService) { // Dependency injection
debugger
   }

  ngOnInit(): void {
    debugger
    let getList =  this.service.getMethod().then(success =>{
      debugger
      console.log(success);
      let getObject : any = success;
      // this.list = getObject.data;

    }).catch(error =>{
      debugger
    });

    // this.form = this.fb.group(
    //   {
    //     fullname: ['', Validators.required],
    //     email: ['', [Validators.required, Validators.email]]
    //   } );


  }

  onSubmit(){
    debugger


    var formValue = this.form.value;

    if(!this.form.valid) {
      this.submitted = true;
    }
    else{
      this.submitted = false;
    }
    this.form.get('fullname')?.value

    this.router.navigate(["/MayankKaran"]);

  }



  

}
