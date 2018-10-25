import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'OUR EXPENSES';
  box0="Add Expenses";
  box5="Total Expenses";
  box1="Card Expenses";
  box2="Cash Expenses";
  box3="View Balances";
  box4="Amount in hand";
  box6="Multiple expenses";

  expenseList: any = [];
  accountList: any = [];
  
  ngOnInit(){
   
  }
}
