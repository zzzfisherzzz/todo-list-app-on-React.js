import React, {Component} from 'react';
import styles from './Input.module.css'

class Input extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Add Your Task.."
                    className={styles.addTask}
                />
            </div>
        );
    }
}

export default Input;