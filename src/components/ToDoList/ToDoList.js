import React, {Component} from 'react';
import styles from './ToDoList.module.css'
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import Button from "../Button/Button";
import Input from "../Input/Input";

class ToDoList extends Component {
    render() {
        return (
            <div className={styles.wrap}>
                <h3 className={styles.title}>My ToDo List!</h3>
                <form className={styles.createForm}>
                    <Input/>
                    <Button/>
                </form>
                <ul className={styles.toDoList}>
                    <ToDoListItem/>
                    <ToDoListItem/>
                    <ToDoListItem/>
                    <ToDoListItem/>
                    <ToDoListItem/>
                </ul>
            </div>
        );
    }
}

export default ToDoList;