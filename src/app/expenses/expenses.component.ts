import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  expenseList: any = [];
  accountList: any = [];

  constructor() { }

  ngOnInit() {
    this.expenseList.push({id:"NONE",value: 'Expense Category'});
    this.expenseList.push({id:"VEG",value: 'Vegetables'});
    this.expenseList.push({id:"GROCERY",value: 'Grocery'});
    this.expenseList.push({id:"WATER",value: 'Water'});
    this.expenseList.push({id:"DEXPENSES",value: 'Daily Expenses'});
    this.expenseList.push({id:"FUEL",value: 'Fuel'});
    this.expenseList.push({id:"TRAVEL",value: 'Travel'});
    this.expenseList.push({id:"RENT",value: 'Rent'});
    this.expenseList.push({id:"CHIT",value: 'Chit Fund'});
    this.expenseList.push({id:"TRANSFER",value: 'Transferred'});
    this.expenseList.push({id:"LIC",value: 'Life Insurance'});


    this.accountList.push({id:"NONE",value: 'Account Category'});
    this.accountList.push({id:"HDFC_CC",value: 'Hdfc Credit Card'});
    this.accountList.push({id:"HDFC_DC",value: 'Hdfc Debit Card'});
    this.accountList.push({id:"KALAI_CC",value: 'Kalai Credit Card'});
    this.accountList.push({id:"CASH",value: 'Cash'});
    this.accountList.push({id:"SODEXO",value: 'Sodexo'});

  }

}
