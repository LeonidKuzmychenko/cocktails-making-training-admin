import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CocktailsComponent} from './components/cocktails/cocktails.component';
import {IngredientsComponent} from './components/ingredients/ingredients.component';
import {ModesComponent} from './components/modes/modes.component';

const routes: Routes = [
  {path: 'cocktails', component: CocktailsComponent},
  {path: 'ingredients', component: IngredientsComponent},
  {path: 'modes', component: ModesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
