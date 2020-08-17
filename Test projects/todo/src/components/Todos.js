import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

const Todos = (props) => {
    const {
        todos,
        subTodos,
        editing,
        editTodo,
        editSubTodo,
        cancelEdit,
        markComplete,
        markCompleteSubTodo,
        deleteTodo,
        deleteSubTodo,
        setEdit,
        addSubTodo,
    } = props;
    return todos.map((todo) =>
        editing === todo.id ? (
            <EditTodo
                key={todo.id}
                todo={todo}
                editTodo={editTodo}
                cancelEdit={cancelEdit}
                editSubTask={editSubTodo}
            />
        ) : (
            <TodoItem
                key={todo.id}
                todo={todo}
                subTodos={subTodos}
                markComplete={markComplete}
                markCompleteSubTodo={markCompleteSubTodo}
                deleteTodo={deleteTodo}
                setEdit={setEdit}
                addSubTodo={addSubTodo}
                editTodo={editTodo}
                editSubTodo={editSubTodo}
                deleteSubTodo={deleteSubTodo}
                cancelEdit={cancelEdit}
                editing={editing}
            />
        )
    );
};

export default Todos;
