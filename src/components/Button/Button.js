import React, {Component} from 'react';
import styles from './Button.module.css'

class Button extends Component {
    render() {
        return (
            <div>
                <button type="button" className={styles.add}>Add</button>
            </div>
        );
    }
}

export default Button;