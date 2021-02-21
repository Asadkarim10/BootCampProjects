import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'


function  ExpensesT() { 

let transaction = [  
       {   amount:500,  desc: 'Cash'},
       {   amount:-40,  desc: 'Cash'},
       {   amount:-200, desc: 'Camera'}
]

    
      return <div className="container"> 
          <h1 className="text-center">Expenses Tracker</h1> 
          
          <h3>Your Balance <br /> $260</h3>
          
          <div className="expense-container">
              <h3>INCOME <br /> $500 </h3>   
              <h3>EXPENSE <br /> $240 </h3>    
          </div>

            <h3>History</h3>

            <hr />

            <ul className="transaction-list">
                <li>
                    <span>Cash</span> 
                    <span>+500</span>   
                </li>
                
                <li>
                    <span>Book</span> 
                    <span>+40</span>   
                </li>

                <li>
                    <span>Camera</span> 
                    <span>+200</span>   
                </li>
            </ul>



            <h3>Add new transaction</h3>
          
            <hr />
          
            <form>
                <label>
                    Enter Description <br />
                    <input type="text"  required />
                </label>
                <label>
                    Enter Amount <br />
                    <input type="number"  required />
                </label>
                    <input type="submit" value="Add Transaction"/>
            </form>


          </div>
    }
  

  export default ExpensesT;