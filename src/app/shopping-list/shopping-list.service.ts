import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    //cria um event emmiter pra avisar quando o ingredient mudar
    ingredientChanged = new Subject<Ingredient[]>();

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
        this.ingredientChanged.next(this.getIngredients());
    }

    addIngredients(ingredient: Ingredient[]) {
       //converte array para lista, pois o metodo so suporta lista
       //... = operador para fazer
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.getIngredients());
    }


}