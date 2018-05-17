import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  //styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
    @ViewChild('nameInput') nameInputRef : ElementRef;
    @ViewChild('amountInput') amountInputRef : ElementRef;


    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
    }

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName,ingAmount);
        
        this.shoppingListService.addIngredient(newIngredient);
    }

}
