import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SunitaMayurServiceService } from '../services/sunita-mayur-service.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  form: FormGroup;
  submit =  false
  constructor(public fb : FormBuilder, public router:Router,public activeRoutes:ActivatedRoute, private _services : SunitaMayurServiceService) { } // Dependacy inejection

  ngOnInit(): void {

    this.activeRoutes.snapshot.params["id"];
    this.form = this.fb.group(
      {
          FirstName : ["", [Validators.required, Validators.email]],
          LastName : ["", Validators.required]
      }
    )

    this._services.getItems();
  }

  save(form : any)
  {

debugger
    // this.router.navigate(["/productShruti/" + 2]);

    debugger ;
    
    if(!this.form.valid){
      this.submit = true;
      alert(1)
      return;
    }
    else{

      var a =this.form.value
      this.submit = false;
      alert(2)
    }

    //API >> SAVE
  
  }

}
