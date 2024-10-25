import React, { Children } from 'react'
import Styles from "./Button.module.css"

const Button = ({children, buttonType, handleButton, shadow=false}) => {
  return (
    <div>
      <button className={`${Styles[buttonType]} ${Styles.btn} ${shadow && Styles.shadow}`} onClick={handleButton}>{children}</button>
    </div>
  )
}

export default Button