import { Ingredient } from '../shared/ingredient.model';

import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    //cria um event emmiter pra avisar quando o ingredient mudar
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Pie', 10),
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    constructor() {}

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        //ao alterar informa o novo array
        this.ingredientChanged.emit(this.getIngredients());
    }

}