import { Component, OnInit } from '@angular/core';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  providers: [RecipeService],
  //styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
