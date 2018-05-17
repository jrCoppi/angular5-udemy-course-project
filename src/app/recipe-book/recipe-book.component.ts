import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  providers: [RecipeService],
  //styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) { }

    ngOnInit() {
        //argument list -> funciton body
        //seta a receita selecionada com a selecionada no service
        this.recipeService.recipeSelected
            .subscribe(
                (recipe:Recipe) => {
                    this.selectedRecipe = recipe;
                }
            );
    }

}
