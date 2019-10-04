import React from 'react';
import styles from './Input.module.css'

const Input = props => {
    const inputType = props.type || 'text'

    return (
        <div>
            <input
                type={inputType}
                value={props.value}
                onChange={props.onChange}
                className={styles.addTask}
                placeholder="Add Your Task.."
            />
        </div>
    )
}

export default Input
