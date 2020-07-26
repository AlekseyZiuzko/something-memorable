import React, { Component } from "react";
import uuid from "react-uuid";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

export class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            editing: [],
        };
    }

    componentDidMount() {
        this.setState({
            todos:
                localStorage.getItem("todos") === null
                    ? []
                    : JSON.parse(localStorage.getItem("todos")),
        });
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                    localStorage.setItem(
                        "todos",
                        JSON.stringify(this.state.todos)
                    );
                }
                return todo;
            }),
        });
    };

    addTodo = (title) => {
        const newTodo = {
            id: uuid(),
            title,
            completed: false,
        };

        this.state.todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(this.state.todos));

        this.setState({
            todos:
                localStorage.getItem("todos") === null
                    ? []
                    : JSON.parse(localStorage.getItem("todos")),
        });
    };

    setEdit = (id) => {
        this.setState((state) => ({ editing: [...state.editing, id] }));
    };

    cancelEdit = (id) => {
        const copyEditing = [...this.state.editing];
        const canceledIndex = copyEditing.indexOf(id);
        copyEditing.splice(canceledIndex, 1);

        this.setState({
            editing: copyEditing,
        });
    };

    editTodo = (todo) => {
        this.setState(
            {
                todos: this.state.todos.map((t) =>
                    t.id === todo.id ? { ...t, ...todo } : t
                ),
                editing: this.state.editing.filter((id) => todo.id !== id),
            },
            () =>
                localStorage.setItem("todos", JSON.stringify(this.state.todos))
        );
    };

    deleteTodo = (id) => {
        this.state.todos.forEach((todo, index) => {
            if (id === todo.id) {
                this.state.todos.splice(index, 1);
            }
        });
        localStorage.setItem("todos", JSON.stringify(this.state.todos));

        this.setState({
            todos:
                localStorage.getItem("todos") === null
                    ? []
                    : JSON.parse(localStorage.getItem("todos")),
        });
    };

    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    setEdit={this.setEdit}
                    editTodo={this.editTodo}
                    deleteTodo={this.deleteTodo}
                    cancelEdit={this.cancelEdit}
                    editing={this.state.editing}
                />
            </div>
        );
    }
}

export default TodoList;
