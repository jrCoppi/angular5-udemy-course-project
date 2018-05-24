import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
           'teste name recipe','this is a teste',
           'http://www.readersdigest.ca/wp-content/uploads/2013/02/worst-foods-for-aging-fast-food.jpg',
           [
              new Ingredient('Meat', 1),
              new Ingredient('French Fries', 20),
           ]
         ),
        new Recipe(
           'another teste recipe',
           'this is a new teste',
           'http://www.readersdigest.ca/wp-content/uploads/2013/02/worst-foods-for-aging-fast-food.jpg',
           [
           new Ingredient('Buns', 2),
           new Ingredient('Coke', 1),
           ]
         )
    ];

    recipeSelected = new EventEmitter<Recipe>();

    constructor(
       private shoppingListService: ShoppingListService) {}

    getRecipes() {
        //return copy of array
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientToShopping(ingredients: Ingredient[]){
       this.shoppingListService.addIngredients(ingredients);
    }
}