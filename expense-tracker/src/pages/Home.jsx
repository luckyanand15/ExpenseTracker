import React, { useEffect, useState } from "react";
import Styles from "./Home.module.css";
import Card from "../components/Card/Card";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const[expense, setExpense] = useState(0);
  
  useEffect(()=>{
    const bal = localStorage.getItem("balance");
    if(bal){
      setBalance(bal);
    }else{
      setBalance(5000);
      localStorage.setItem("balance",5000);
    }
  },[])

  return (
    <div className={Styles.container}>
      <h1>Expense Tracker</h1>
      <div className={Styles.topSectionWrapper}>
        <Card 
          title="Wallet Balance"
          money={balance}
          buttonText="+ Add Income"
          buttonType="income"
        />
        <Card 
          title="Expenses"
          money={expense}
          buttonText="+ Add Expense"
          buttonType="expense"
        />
        Chart
      </div>
    </div>
  );
};

export default Home;
