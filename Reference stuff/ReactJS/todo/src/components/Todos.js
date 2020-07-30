import React, { Component } from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) =>
            this.props.editing === todo.id ? (
                <EditTodo
                    key={todo.id}
                    todo={todo}
                    editTodo={this.props.editTodo}
                    cancelEdit={this.props.cancelEdit}
                    editSubTask={this.props.editSubTask}
                />
            ) : (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    subTodos={this.props.subTodos}
                    markComplete={this.props.markComplete}
                    markCompleteSubTask={this.props.markCompletSubTask}
                    deleteTodo={this.props.deleteTodo}
                    setEdit={this.props.setEdit}
                    addSubTask={this.props.addSubTask}
                    editTodo={this.props.editTodo}
                    editSubTask={this.props.editSubTask}
                    deleteSubTask={this.props.deleteSubTask}
                    cancelEdit={this.props.cancelEdit}
                    editing={this.props.editing}
                />
            )
        );
    }
}

export default Todos;
