import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

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

    constructor(
       private shoppingListService: ShoppingListService) {}

    getRecipes() {
        //return copy of array
        return this.recipes.slice();
    }

    addIngredientToShopping(ingredients: Ingredient[]){
       this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
      return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
}