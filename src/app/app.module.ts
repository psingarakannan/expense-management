import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MultipleExpensesComponent } from './multiple-expenses/multiple-expenses.component';
import { ViewEditExpensesComponent } from './view-edit-expenses/view-edit-expenses.component';

const appRoutes: Routes = [
  { path: 'add', component: ExpensesComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'add-multi', component: MultipleExpensesComponent },
  { path: 'view-edit', component: ViewEditExpensesComponent },
  { path: '**', pathMatch:'full', redirectTo: 'AppComponent' }
];


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    DashboardComponent,
    MultipleExpensesComponent,
    MultipleExpensesComponent,
    ViewEditExpensesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
