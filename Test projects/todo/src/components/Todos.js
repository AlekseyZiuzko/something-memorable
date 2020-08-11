import React, { Component } from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

class Todos extends Component {
    render() {
        const {
            todos,
            subTodos,
            editing,
            editTodo,
            editSubTask,
            cancelEdit,
            markComplete,
            markCompletSubTask,
            deleteTodo,
            deleteSubTask,
            setEdit,
            addSubTask,
        } = this.props;
        return todos.map((todo) =>
            editing === todo.id ? (
                <EditTodo
                    key={todo.id}
                    todo={todo}
                    editTodo={editTodo}
                    cancelEdit={cancelEdit}
                    editSubTask={editSubTask}
                />
            ) : (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    subTodos={subTodos}
                    markComplete={markComplete}
                    markCompleteSubTask={markCompletSubTask}
                    deleteTodo={deleteTodo}
                    setEdit={setEdit}
                    addSubTask={addSubTask}
                    editTodo={editTodo}
                    editSubTask={editSubTask}
                    deleteSubTask={deleteSubTask}
                    cancelEdit={cancelEdit}
                    editing={editing}
                />
            )
        );
    }
}

export default Todos;
