import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  //styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
   ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
      this.ingredients = this.shoppingListService.getIngredients();
      //push notification - recebe a notificação quando array for mudado e ataliza
      this.shoppingListService.ingredientChanged.
          subscribe((ingredients: Ingredient[]) => {
              this.ingredients = ingredients;
          });
  }


}
