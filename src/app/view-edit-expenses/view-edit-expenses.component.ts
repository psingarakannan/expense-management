import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-edit-expenses',
  templateUrl: './view-edit-expenses.component.html',
  styleUrls: ['./view-edit-expenses.component.css']
})
export class ViewEditExpensesComponent implements OnInit {
  expenseList: any = [];
  accountList: any = [];
  expenses: any = [];
  expenseSize:number;
  isHello:boolean;
  constructor() { }

  ngOnInit() {    
    this.isHello=true;
    this.expenseSize=1;
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});
    this.expenses.push({id:this.expenseSize,amount:1,desc:"",date:"",editEnabled:true});


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

  submitExpense(expense){
    console.log("Submit expenses")
    expense.editEnabled=true;    
    expense.submitEnabled=false;
    
  }
  editExpense(expense){
    console.log("Edit expenses")
    expense.editEnabled=false;    
    expense.submitEnabled=true;
  }
}
