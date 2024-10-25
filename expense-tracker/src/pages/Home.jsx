import React, { useEffect, useState } from "react";
import Styles from "./Home.module.css";
import Card from "../components/Card/Card";
import Modal from "../components/Modal/Modal";
import BalanceForm from "../components/Form/BalanceForm/BalanceForm";
import ExpenseForm from "../components/Form/ExpenseForm/ExpenseForm";

const Home = () => {
  const [balance, setBalance] = useState(0);
  const [expense, setExpense] = useState(0);
  const [expenseData, setExpenseData] = useState([]);
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);
  const [isExpenseOpen, setIsExpenseOpen] = useState(false);
  const [isMounet, setIsMounted] = useState(false);

  useEffect(() => {
    const bal = localStorage.getItem("balance");
    if (bal) {
      setBalance(Number(bal));
    } else {
      setBalance(5000);
      localStorage.setItem("balance", 5000);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounet) {
      localStorage.setItem("balance", balance);
    }
  }, [balance]);
  console.log(expenseData);
  return (
    <div className={Styles.container}>
      <h1>Expense Tracker</h1>
      <div className={Styles.topSectionWrapper}>
        <Card
          title="Wallet Balance"
          money={balance}
          buttonText="+ Add Income"
          buttonType="income"
          handleButton={() => setIsBalanceOpen(true)}
        />
        <Card
          title="Expenses"
          money={expense}
          buttonText="+ Add Expense"
          buttonType="expense"
          handleButton={() => setIsExpenseOpen(true)}
        />
        Chart
      </div>
      <Modal isOpen={isBalanceOpen} setIsOpen={setIsBalanceOpen}>
        <BalanceForm setIsOpen={setIsBalanceOpen} setBalance={setBalance} />
      </Modal>
      <Modal isOpen={isExpenseOpen} setIsOpen={setIsExpenseOpen}>
        <ExpenseForm
          setIsOpen={setIsExpenseOpen}
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          balance={balance}
          setBalance={setBalance}
        />
      </Modal>
    </div>
  );
};

export default Home;
