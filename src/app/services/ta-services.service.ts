import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs'; 
import { Product } from './product';
import { environment } from '../../environments/environment';

@Injectable({ //Dependacy injection
  providedIn: 'root' // I can use this service in throught application
})
export class TAServicesService {

  constructor(private _http : HttpClient) { //Dependacy injection

   }


  getList()
  {
    return "abc";
  }

  getMethod(){

    return new Promise((sucess, error) => { 
      this._http.delete("http://localhost:3001/items")
      .subscribe({
        next: (v) =>{
          sucess(v);
          // localStorage.getItem("Key")
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
  

  getAll(URLName:any): Observable<Product[]> {
    return this._http.get<Product[]>(environment.api_URL + URLName)
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
