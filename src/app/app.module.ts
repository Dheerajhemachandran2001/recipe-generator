import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { CategoriesComponent } from './result/categories/categories.component';
import { AlphabetsComponent } from './result/alphabets/alphabets.component';
import { AreasComponent } from './result/areas/areas.component';
import { IngredientsComponent } from './result/ingredients/ingredients.component';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    CategoriesComponent,
    AlphabetsComponent,
    AreasComponent,
    IngredientsComponent,
    SearchComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
