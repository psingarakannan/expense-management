import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-expenses',
  templateUrl: './multiple-expenses.component.html',
  styleUrls: ['./multiple-expenses.component.css']
})
export class MultipleExpensesComponent implements OnInit {
  expenseList: any = [];
  accountList: any = [];
  expenses: any = [];
  expenseSize:number;
  constructor() { }

  ngOnInit() {    
    this.expenseSize=1;
    this.expenses.push({id:this.expenseSize,amount:undefined,desc:"",date:undefined});
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
  addExpense(){
    console.log("Add expenses")
    this.expenseSize=this.expenseSize+1;
    this.expenses.push({id:this.expenseSize,amount:undefined,desc:"",date:""});
  }

  deleteExpense(index){
    console.log("Delete expenses")
    if(this.expenseSize<=0){
      return;
    }
    else{
      if(index<=0){
          index = this.expenseSize;
      }
      this.expenseSize=this.expenseSize-1;
      this.expenses.splice(this.expenseSize,1);  
    }
  }

  submitExpenses(){
    console.log("Submit expenses")
    for(let exp of this.expenses){
      console.log("id "+exp.id+" desc "+exp.desc+" amount "+exp.amount+" date "+exp.date)
    }
  }
  cloneExpense(expense){
    console.log("Clone expenses")
    this.expenseSize=this.expenseSize+1;
    this.expenses.push({id:this.expenseSize,amount:expense.amount,desc:expense.desc,date:expense.date});
  }
}
