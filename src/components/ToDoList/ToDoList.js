import React, {Component} from 'react';
import styles from './ToDoList.module.css'
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

class ToDoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            list: []
        }
    }

    changeUserInput(input) {
        this.setState({
            input: input
        });
    }

    addToList(input) {
        let toDoList = this.state.list;

        toDoList.push(input);

        this.setState({
            list: toDoList,
            input: ''
        });
    }

    render() {
        return (
            <div className={styles.wrap}>
                <h3 className={styles.title}>My ToDo List!</h3>
                <form className={styles.createForm}>
                    <Input
                        onChange={ (e) => this.changeUserInput(e.target.value)}
                        value={this.state.input}
                        type="text"
                    />
                    <Button
                        type="button"
                        onClick={ () => this.addToList(this.state.input)}>Add</Button>
                </form>
                <ul className={styles.toDoList}>
                    <ToDoListItem />
                    {this.state.list.map( (value) => <li >{value}</li> )}
                </ul>
            </div>
        );
    }

}

export default ToDoList;


