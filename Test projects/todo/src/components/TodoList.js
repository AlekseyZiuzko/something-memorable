import React, { Component } from "react";
import uuid from "react-uuid";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

export class TodoList extends Component {
    state = {
        todos: [],
        subTodos: {},
        editing: "",
    };

    componentDidMount() {
        this.setState({
            todos:
                localStorage.getItem("todos") === null
                    ? []
                    : JSON.parse(localStorage.getItem("todos")),
            subTodos:
                localStorage.getItem("subTodos") === null
                    ? {}
                    : JSON.parse(localStorage.getItem("subTodos")),
        });
    }

    markComplete = (id) => {
        const { todos, subTodos } = this.state;
        const tempSubs = { ...subTodos };
        this.setState(
            {
                todos: todos.map((todo) => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                        tempSubs[todo.id].forEach(
                            (subtask) =>
                                (subtask.completed = !subtask.completed)
                        );
                    }
                    return todo;
                }),
                subTodos: { ...tempSubs },
            },
            () => {
                localStorage.setItem("todos", JSON.stringify(todos));
                localStorage.setItem("subTodos", JSON.stringify(subTodos));
            }
        );
    };

    addTodo = (title) => {
        const newTodo = {
            id: uuid(),
            title,
            completed: false,
        };
        const { todos, subTodos } = this.state;
        const temp = [...todos, newTodo];
        const tempSub = { [newTodo.id]: [] };

        this.setState(
            {
                todos: temp,
                subTodos: { ...subTodos, ...tempSub },
            },
            () => {
                localStorage.setItem("todos", JSON.stringify(this.state.todos));
                localStorage.setItem(
                    "subTodos",
                    JSON.stringify(this.state.subTodos)
                );
            }
        );
    };

    setEdit = (id) => {
        this.setState({ editing: `${id}` });
    };

    cancelEdit = () => {
        this.setState({
            editing: "",
        });
    };

    editTodo = (todo) => {
        const { todos } = this.state;
        const temp = [...todos];

        const editedTodos = temp.map((t) =>
            t.id === todo.id ? { ...t, ...todo } : t
        );

        this.setState(
            {
                todos: editedTodos,
                editing: "",
            },
            () =>
                localStorage.setItem("todos", JSON.stringify(this.state.todos))
        );
    };

    deleteTodo = (id) => {
        const { todos, subTodos } = this.state;
        const temp = { ...subTodos };
        delete temp[id];

        this.setState(
            {
                todos: todos.filter((item) => item.id !== id),
                subTodos: temp,
            },
            () => {
                localStorage.setItem("todos", JSON.stringify(this.state.todos));
                localStorage.setItem(
                    "subTodos",
                    JSON.stringify(this.state.subTodos)
                );
            }
        );
    };

    markCompletSubTask = (id, parentId) => {
        const temp = { ...this.state.subTodos };
        temp[parentId] = temp[parentId].map((subtask) => {
            if (subtask.id === id) {
                subtask.completed = !subtask.completed;
            }
            return subtask;
        });

        this.setState(
            {
                subTodos: temp,
            },
            () =>
                localStorage.setItem(
                    "subTodos",
                    JSON.stringify(this.state.subTodos)
                )
        );
    };

    addSubTask = (title, id) => {
        const newSubTask = {
            id: uuid(),
            title,
            completed: false,
        };

        const temp = { ...this.state.subTodos };

        temp[id] = [...temp[id], newSubTask];

        this.setState(
            {
                subTodos: { ...temp },
            },
            () => {
                localStorage.setItem(
                    "subTodos",
                    JSON.stringify(this.state.subTodos)
                );
            }
        );
    };

    editSubTask = (subtask, parentId) => {
        const temp = { ...this.state.subTodos };

        temp[parentId] = temp[parentId].map((item) =>
            item.id === subtask.id ? { ...item, ...subtask } : item
        );

        this.setState(
            {
                subTodos: { ...temp },
                editing: "",
            },
            () =>
                localStorage.setItem(
                    "subTodos",
                    JSON.stringify(this.state.subTodos)
                )
        );
    };

    deleteSubTask = (id, parentId) => {
        const temp = { ...this.state.subTodos };

        temp[parentId] = temp[parentId].filter((item) => item.id !== id);

        this.setState(
            {
                subTodos: { ...temp },
            },
            () => {
                localStorage.setItem(
                    "subTodos",
                    JSON.stringify(this.state.subTodos)
                );
            }
        );
    };

    render() {
        return (
            <div>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                    todos={this.state.todos}
                    subTodos={this.state.subTodos}
                    markComplete={this.markComplete}
                    markCompletSubTask={this.markCompletSubTask}
                    setEdit={this.setEdit}
                    editTodo={this.editTodo}
                    editSubTask={this.editSubTask}
                    deleteTodo={this.deleteTodo}
                    cancelEdit={this.cancelEdit}
                    addSubTask={this.addSubTask}
                    deleteSubTask={this.deleteSubTask}
                    editing={this.state.editing}
                />
            </div>
        );
    }
}

export default TodoList;
