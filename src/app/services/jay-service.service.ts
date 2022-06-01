import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs'; 
//Reactive Extensions for JavaScript
import { Product } from './product';

@Injectable({
  providedIn: 'root' // India >>
})
export class JayServiceService {

  constructor(public _http: HttpClient) { }

  getServices(){
    debugger
    return new Promise((sucess, error) => { 
      this._http.get("https://reqres.in/api/users?page=2")
      .subscribe({
        next: (v) =>{
          debugger
          sucess(v);
        } ,
        error: (e) => {
          debugger
          console.error(e)
        },
        complete: () =>{
          debugger
          console.info('complete')
        } 
       });

    })
  }

  getAll(): Observable<Product[]> {
    return this._http.get<Product[]>('http://localhost:3000/book-module')
    .pipe(
      catchError(this.errorHandler)
    )

    }

    errorHandler(error: any ) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(() => new Error(errorMessage))
   }
  
}  


