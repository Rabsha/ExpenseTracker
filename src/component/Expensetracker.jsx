import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ExpenseTracker = () => {

    const element = <FontAwesomeIcon icon={faTrash} />

    const [expense, setExpense] = useState('');
    const [amount, setAmount] = useState('');
    const [data, setAllData] = useState([]);
    const [IncomeTotal, setTotalIncome] = useState(0);
    const [IncomeValues, setIncomeValues] = useState([]);
    const [ExpenseTotal, setTotalExpense] = useState(0);
    const [ExpenseValues, setExpenseValues] = useState([]);
    const [TotalBalance, setTotalBalance] = useState(0);


    const HandleValue1 = (event) => {
        setExpense(event.target.value);
    }

    const HandleValue2 = (event) => {
        setAmount(event.target.value);
    }

    const HandleData = () => 
    {
        if(expense.trim() != '' && amount.trim() != '')
        {
            const myData = [...data, {expense:expense,amount:amount}];
            setAllData(myData);

            let newExpenseTotal = ExpenseTotal;
            let newIncomeTotal = IncomeTotal;

            if (amount.includes('-')) {
                let cleanAmount = amount;
                if (amount.startsWith('-')) {
                    cleanAmount = amount.substring(1); // Remove the "-" sign
                }
    
                newExpenseTotal += parseInt(cleanAmount);
                setTotalExpense(newExpenseTotal);
                setExpenseValues([...ExpenseValues, cleanAmount]);
            } else {
                newIncomeTotal += parseInt(amount);
                setTotalIncome(newIncomeTotal);
                setIncomeValues([...IncomeValues, amount]);
            }
            const newBalance = newIncomeTotal - newExpenseTotal;
            setTotalBalance(newBalance);

            setExpense('');
            setAmount('');
            
        }
    }

    return(
        <div className="ExpenseTracker">
            <div className="container">
                <div className="mainboxtracker">
                    <h1>Expense Tracker</h1>
                </div>
                <div className="mymains">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="leftsidebox">
                                <h4><b>ADD NEW EXPENSE</b></h4>
                                <form method="post" onSubmit={(e) => { e.preventDefault(); }}>
                                    <div className="form-group">
                                        <label>Name of Expense</label>
                                        <input type="text" value={expense} onChange={HandleValue1} className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input type="number" value={amount} onChange={HandleValue2} className="form-control" />
                                    </div>
                                    <div className="mybtns">
                                        <button className="btnworks" onClick={HandleData}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="centersidebox">
                                <h4><b>HISTORY RECORD</b></h4>
                                <div className="myhistory">
                                    <ul>
                                        {data.map((result,index) => (                                            
                                            <li key={index}>
                                                <span className="rightSpan">{result.expense}</span> 
                                                <span className="leftSpan">{result.amount}</span> 
                                                <a href="#" className="myDelete">{element}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="rightsidebox">
                                <div className="Maindata">
                                    <h4><b>BALANCE: ${TotalBalance}</b></h4>
                                </div>
                                <div className="MainIncome">
                                    <div className="OneeIncome">
                                        <h3 style={{color:"green",fontWeight:"bold"}}>Income</h3>
                                        <h3 style={{color:"green",fontWeight:"bold"}}>{IncomeTotal}</h3>
                                    </div>
                                    <div className="OneeIncome">
                                        <h3 style={{color:"red",fontWeight:"bold"}}>Outcome</h3>
                                        <h3 style={{color:"red",fontWeight:"bold"}}>{ExpenseTotal}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseTracker