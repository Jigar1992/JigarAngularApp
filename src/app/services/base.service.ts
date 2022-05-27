import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs'; 
//Reactive Extensions for JavaScript
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public _http: HttpClient) { }

  getMethod(){

    return new Promise((sucess, error) => { 
      this._http.get("http://localhost:3000/book-module")
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

  getMethod112(user :any){

    return new Promise((resolve, reject) => { 
      this._http.post("http://localhost:3000/book-moduledsfsffd", user)
      .subscribe({
        next: (v) =>{
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

