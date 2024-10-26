import React, { useState } from "react";
import Styles from "./ExpenseForm.module.css";
import Button from "../../Button/Button";
import { useSnackbar } from "notistack";

const ExpenseForm = ({ setIsOpen, expenseData ,setExpenseData, balance, setBalance }) => {
  const {enqueueSnackbar} = useSnackbar();
  const [isRequired, setIsRequired] = useState(true)
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(balance<Number(formData.price)){
      enqueueSnackbar(`Can not spend more than wallet balance`, {variant:"warning"});
      setIsOpen(false);
      return;
    }
    if (formData.price <= 0) {
      enqueueSnackbar("Amount Should be greater than 0", {
        variant: "warning",
      });
      setIsOpen(true);
      return;
    }
    setExpenseData([formData, ...expenseData]);
    setBalance((prev)=>prev-Number(formData.price));
    enqueueSnackbar(`Expense added Successfully`, {variant:"success"});
    setIsOpen(false);
  }
  
  return (
    <div className={Styles.formWrapper}>
      <h3>Add Expenses</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required={isRequired}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required={isRequired}
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required={isRequired}
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="food">Food</option>
          <option value="entertainment">Entertainment</option>
          <option value="travel">Travel</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required={isRequired}
        />
        <Button type="submit" buttonType={"success"} shadow>
          Add Expense
        </Button>
        <Button
          buttonType={"cancel"}
          shadow
          handleButton={() => {
            setIsOpen(false);
            setIsRequired(false);
          }}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default ExpenseForm;
