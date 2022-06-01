import { Injectable } from '@angular/core';

@Injectable({ //Dependacy injection
  providedIn: 'root' // Throught application
})
export class SunitaMayurServiceService {

  constructor() { }

  getItems()
  {
    return "Sunita and Mayur"
  }
}
