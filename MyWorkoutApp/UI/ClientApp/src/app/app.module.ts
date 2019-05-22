import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CategoryService } from './category.service';
import { ListcategoriesComponent } from './listcategories/listcategories.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { EditcategoryComponent } from './editcategory/editcategory.component';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { WorkoutService } from './workout.service';
import { ListworkoutsComponent } from './listworkouts/listworkouts.component';
import { CrudworkoutComponent } from './crudworkout/crudworkout.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ListcategoriesComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    AddworkoutComponent,
    ListworkoutsComponent,
    CrudworkoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'list-categories', component: ListcategoriesComponent },
      { path: 'add-category', component: AddcategoryComponent },
      { path: 'edit-categories', component: EditcategoryComponent },
      { path: 'list-categories', component: ListcategoriesComponent },
      { path: 'add-workout', component: AddworkoutComponent },
      { path: 'list-workout', component: ListworkoutsComponent },
      { path: 'crud-workout', component: CrudworkoutComponent },
      { path: '', redirectTo: 'list-categories', pathMatch:'full' }
      
    ])
  ],
  providers: [CategoryService, WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
