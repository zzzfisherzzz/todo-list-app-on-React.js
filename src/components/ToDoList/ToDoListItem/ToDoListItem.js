import React, {Component} from 'react';
import styles from './ToDoListItem.module.css'
import del from "../../../img/delete.png";

class ToDoListItem extends Component {
    render() {
        return (
            <div>
                <li className={styles.toDoListItem}>
                    <input type="checkbox" />
                    list-item
                    <button className={styles.delete}><img src={del} alt="delete" /></button>
                </li>
            </div>
        );
    }
}

export default ToDoListItem;