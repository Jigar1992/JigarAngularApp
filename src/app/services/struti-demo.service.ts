import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';


@Injectable({ //
  providedIn: 'root' /// whole application
})
export class StrutiDemoService {

  constructor(public _http: HttpClient) { }

  array: any = [1,2,3,4];

  getAll()
  {
    return this.array;
  }

  getAllRecords()
  {
    return new Promise((resolve, reject) => { 
      this._http.get("https://reqres.in/api/users?page=2")
      .subscribe({
        next: (v) =>{
          debugger
          resolve(v);
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
