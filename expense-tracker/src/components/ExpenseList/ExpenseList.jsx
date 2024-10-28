import React, { useState } from "react";
import Styles from "./ExpenseList.module.css";
import ExpenseCard from "../ExpenseCard/ExpenseCard";
import Modal from "../Modal/Modal";
import ExpenseForm from "../Form/ExpenseForm/ExpenseForm";

const ExpenseList = ({ expenseData, setExpenseData, balance, setBalance }) => {
  const [editId, setEditId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (id)=>{
    const deleteItem = expenseData.find((item)=> item.id === id);
    setBalance(prev=>prev+Number(deleteItem.price));
    setExpenseData(prev=>prev.filter((item)=>item.id != id));
  }

  const handleEdit = (id)=>{
    setEditId(id);
    setIsOpen(true)
  }
  return (
    <div className={Styles.expenseWrapper}>
      <h2>Recent Transactions</h2>
      {expenseData.length > 0 ? 
      <div className={Styles.expenseList}>
        <div>
          {expenseData.map((item)=>{
            return(
              <ExpenseCard details={item} key={item.id} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)}/>
            )
          })}
        </div>
      </div> : 
      <div className={Styles.expenseList}>
        <p>No Transactions!</p>   
      </div>}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ExpenseForm
          setIsOpen={setIsOpen}
          expenseData={expenseData}
          setExpenseData={setExpenseData}
          balance={balance}
          setBalance={setBalance}
          editId={editId}
        />
      </Modal>
    </div>
  );
};

export default ExpenseList;
