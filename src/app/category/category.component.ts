import { Component, OnInit } from '@angular/core';

//@ >> Decorator

@Component({ //@ >> Decorator
  selector: 'app-category', // HTML TAG
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // <app-category></app-category>
  constructor() { 

  }

  ngOnInit(): void {
  }

}
