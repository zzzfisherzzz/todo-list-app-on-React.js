import React from 'react';
import styles from './Button.module.css'

const Button = (props) => {
    return (
        <button
            type="button"
            onClick={props.onClick}
            className={styles.add}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
}
export default Button

