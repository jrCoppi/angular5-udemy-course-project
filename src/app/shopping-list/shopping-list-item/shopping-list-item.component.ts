import { Component, OnInit, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {
    @ViewChild('nameInput') nameInputRef : ElementRef;
    @ViewChild('amountInput') amountInputRef : ElementRef;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();


    constructor() { }

    ngOnInit() {
    }

    onAddItem() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName,ingAmount);
        this.ingredientAdded.emit(newIngredient);
    }

}
