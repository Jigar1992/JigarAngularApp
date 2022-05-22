import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' ///Throught application > whole application 
})
export class NIkunjServiceService {

  constructor(private _http : HttpClient) { }

  getAll()
  {
    return "Jigar";
  }

  GetList()
  {
    return new Promise((sucess, error) => { 
      this._http.get("https://reqres.in/api/users?page=2")
      .subscribe({
        next: (v) =>{
          debugger
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
