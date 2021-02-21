import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CocktailsComponent} from './cocktails/cocktails.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {ModesComponent} from './modes/modes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cocktails', component: CocktailsComponent},
  {path: 'ingredients', component: IngredientsComponent},
  {path: 'modes', component: ModesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
