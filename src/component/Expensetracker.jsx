import React from "react";

const ExpenseTracker = () => {
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
                                <h4>Add New Expense</h4>
                                <form>
                                    <div className="form-group">
                                        <label>Name of Expense</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Amount</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="mybtns">
                                        <button className="btnworks">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="centersidebox">
                                <h4>History Record</h4>
                                <div className="myhistory">
                                    <ul>
                                        <li>Rabsha Shakeel <a href="#">Delete</a></li>
                                        <li>Rabsha Shakeel <a href="#">Delete</a></li>
                                        <li>Rabsha Shakeel <a href="#">Delete</a></li>
                                        <li>Rabsha Shakeel <a href="#">Delete</a></li>
                                        <li>Rabsha Shakeel <a href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="rightsidebox">
                                <div className="Maindata">
                                    <h4>Balance: 45100$</h4>
                                </div>
                                <div className="MainIncome">
                                    <div className="OneeIncome">
                                        <h3>Income</h3>
                                        <h3>500$</h3>
                                    </div>
                                    <div className="OneeIncome">
                                        <h3>Outcome</h3>
                                        <h3>500$</h3>
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