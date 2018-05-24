import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';

import { RecipeStartComponent } from './recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';

//constantes cotendo as rotas
// 1 - caminho, 2 -  componente correspondente, 3 - fllhos, podendo adicionar parametros
const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipes', component: RecipeBookComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ] 
}
  /*{ path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent }
  ] }*/
];

//importa o modulo de routr do angular
//forRoot - rotas para a aplicação principal
@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  //exporta para que no app module pudemos importar nosos módulo criado aqui
  exports: [RouterModule]
})
export class AppRoutingModule {

}
