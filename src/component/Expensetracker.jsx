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
                                <h4><b>ADD NEW EXPENSE</b></h4>
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
                                <h4><b>HISTORY RECORD</b></h4>
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
                                    <h4><b>BALANCE: 45100$</b></h4>
                                </div>
                                <div className="MainIncome">
                                    <div className="OneeIncome">
                                        <h3 style={{color:"green",fontWeight:"bold"}}>Income</h3>
                                        <h3 style={{color:"green",fontWeight:"bold"}}>500$</h3>
                                    </div>
                                    <div className="OneeIncome">
                                        <h3 style={{color:"red",fontWeight:"bold"}}>Outcome</h3>
                                        <h3 style={{color:"red",fontWeight:"bold"}}>500$</h3>
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