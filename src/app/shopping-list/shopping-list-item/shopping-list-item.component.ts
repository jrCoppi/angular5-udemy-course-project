import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list.service';

import { NgForm } from '@angular/forms';

import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  //styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit,OnDestroy {
    @ViewChild('f') slForm : NgForm;
    subscription : Subscription;
    editMode = false;
    editItemIndex: number;
    editItem : Ingredient;


    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        this.subscription = this.shoppingListService.startEditing.subscribe(
            (index: number) => {
                this.editMode = true;
                this.editItemIndex = index;
                this.editItem = this.shoppingListService.getIngredient(index);
                this.slForm.setValue({
                    name: this.editItem.name,
                    amount: this.editItem.amount
                });
            }
           );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe;
    }

    onAddItem(form: NgForm) {
        const value = form.value;
        const newIngredient = new Ingredient(value.name,value.amount);

        if(this.editMode){
            this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
        } else {
            this.shoppingListService.addIngredient(newIngredient);
        }

        this.onClear();
    }

    onClear(){
        this.editMode = false;
        this.slForm.reset();
    }

    onDelete(){
        this.shoppingListService.deleteIngredient(this.editItemIndex);
        this.onClear();
    }

}
