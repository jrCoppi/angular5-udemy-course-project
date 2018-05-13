import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelect = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('teste name recipe','this is a teste','http://www.readersdigest.ca/wp-content/uploads/2013/02/worst-foods-for-aging-fast-food.jpg'),
        new Recipe('another teste recipe','this is a new teste','http://www.readersdigest.ca/wp-content/uploads/2013/02/worst-foods-for-aging-fast-food.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

    //repassa para o livro qual receita foi clicada
    onRecipeSelected(recipe: Recipe){
        this.recipeWasSelect.emit(recipe);
    }
}
