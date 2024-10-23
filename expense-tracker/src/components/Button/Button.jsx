import React, { Children } from 'react'
import Styles from "./Button.module.css"

const Button = ({children, buttonType}) => {
  return (
    <div>
      <button className={`${Styles[buttonType]} ${Styles.btn}`}>{children}</button>
    </div>
  )
}

export default Button