import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {CocktailsComponent} from './components/cocktails/cocktails.component';
import {IngredientsComponent} from './components/ingredients/ingredients.component';
import {ModesComponent} from './components/modes/modes.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';

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
    AppRoutingModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
