import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { connect } from "react-redux";
import {
    markCompleteAction,
    markCompleteSubTodoAciton,
    addSubTodoAction,
    editTodoAction,
    editSubTodoAction,
    deleteTodoAction,
    deleteSubTodoAction,
} from "../actions/index";

export class TodoList extends Component {
    state = {
        editing: "",
    };

    setEdit = (id) => {
        this.setState({ editing: `${id}` });
    };

    cancelEdit = () => {
        this.setState({
            editing: "",
        });
    };

    render() {
        return (
            <div>
                <AddTodo subTodos={this.props.subTodos} />
                <Todos
                    todos={this.props.todos}
                    subTodos={this.props.subTodos}
                    markComplete={this.props.markComplete}
                    markCompleteSubTodo={this.props.markCompleteSubTodo}
                    setEdit={this.setEdit}
                    editTodo={this.props.editTodo}
                    editSubTodo={this.props.editSubTodo}
                    deleteTodo={this.props.deleteTodo}
                    cancelEdit={this.cancelEdit}
                    addSubTodo={this.props.addSubTodo}
                    deleteSubTodo={this.props.deleteSubTodo}
                    editing={this.state.editing}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        subTodos: state.subTodos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        markComplete: (id, subTodos) =>
            dispatch(markCompleteAction(id, subTodos)),
        editTodo: (id, text) => dispatch(editTodoAction(id, text)),
        deleteTodo: (id, subTodos) => dispatch(deleteTodoAction(id, subTodos)),
        markCompleteSubTodo: (id, parentId) =>
            dispatch(markCompleteSubTodoAciton(id, parentId)),
        addSubTodo: (parentId, text) =>
            dispatch(addSubTodoAction(parentId, text)),
        editSubTodo: (id, text, parentId) =>
            dispatch(editSubTodoAction(id, text, parentId)),
        deleteSubTodo: (id, parentId) =>
            dispatch(deleteSubTodoAction(id, parentId)),
    };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
