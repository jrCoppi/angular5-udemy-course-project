import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('teste name recipe','this is a teste','http://www.readersdigest.ca/wp-content/uploads/2013/02/worst-foods-for-aging-fast-food.jpg'),
        new Recipe('another teste recipe','this is a new teste','http://www.readersdigest.ca/wp-content/uploads/2013/02/worst-foods-for-aging-fast-food.jpg')
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor() {}

    getRecipes() {
        //return copy of array
        return this.recipes.slice();
    }
}