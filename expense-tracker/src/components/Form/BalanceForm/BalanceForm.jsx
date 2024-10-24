import React from 'react'
import Button from '../../Button/Button'
import Styles from "./BalanceForm.module.css";

const BalanceForm = () => {
  return (
    <div className={Styles.formWrapper}>
        <h3>Add Balance</h3>
        <form>
            <input type="number" placeholder='Income Amount'/>
            <Button buttonType={"success"}>Add Balance</Button>
            <Button buttonType={"cancel"}>Cancel</Button>
        </form>
    </div>
  )
}

export default BalanceForm