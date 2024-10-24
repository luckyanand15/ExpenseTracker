import React, { Children } from 'react'
import Styles from "./Button.module.css"

const Button = ({children, buttonType, handleButton}) => {
  return (
    <div>
      <button className={`${Styles[buttonType]} ${Styles.btn}`} onClick={handleButton}>{children}</button>
    </div>
  )
}

export default Button