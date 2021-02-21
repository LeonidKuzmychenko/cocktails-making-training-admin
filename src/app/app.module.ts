import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CocktailsComponent} from './cocktails/cocktails.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {ModesComponent} from './modes/modes.component';


// const routes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: '/cocktails', component: CocktailsComponent},
//   {path: '/ingredients', component: IngredientsComponent},
//   {path: '/modes', component: ModesComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CocktailsComponent,
    IngredientsComponent,
    ModesComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
