import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  form: FormGroup;
  submit =  false
  constructor(public fb : FormBuilder, public router:Router,public activeRoutes:ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoutes.snapshot.params["id"];
    this.form = this.fb.group(
      {
          FirstName : ["", [Validators.required, Validators.email]],
          LastName : ["", Validators.required]
      }
    )
  }

  save(form : any)
  {


    this.router.navigate(["/productShruti/" + 2]);

    debugger ;
    
    if(!this.form.valid){
      this.submit = true;
      return;
    }
    else{
      this.submit = false;
    }

    //API >> SAVE
    alert(1)
  }

}
