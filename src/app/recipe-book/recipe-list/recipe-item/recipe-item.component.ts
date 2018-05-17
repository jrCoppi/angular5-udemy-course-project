import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  //styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    //recebe uma receita de fora - INPUT
   @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

//emite o evento que foi selecionado
  onSelected() {
      this.recipeService.recipeSelected.emit(this.recipe);
  }

}
