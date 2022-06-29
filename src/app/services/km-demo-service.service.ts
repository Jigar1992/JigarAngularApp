import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // throught application
})
export class KMDemoServiceService {

  constructor(private _http: HttpClient) { 


  }

  getMethod(){

    return new Promise((sucess, error) => { 
      this._http.get("https://reqres.in/api/users?page=2")
      .subscribe({
        next: (v) =>{
          sucess(v);
        } ,
        error: (e) => {
          console.error(e)
        },
        complete: () =>{
          console.info('complete')
        } 
       });

    })

    
  }



}
