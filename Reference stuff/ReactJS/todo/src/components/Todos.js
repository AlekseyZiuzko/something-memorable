import React, { Component } from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) =>
            this.props.editing.includes(todo.id) ? (
                <EditTodo
                    key={todo.id}
                    todo={todo}
                    editTodo={this.props.editTodo}
                    cancelEdit={this.props.cancelEdit}
                />
            ) : (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    markComplete={this.props.markComplete}
                    deleteTodo={this.props.deleteTodo}
                    setEdit={this.props.setEdit}
                />
            )
        );
    }
}

export default Todos;
