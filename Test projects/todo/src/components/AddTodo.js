import React from "react";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { addTodoAction, createSubTodoArrAction } from "../actions/index";

export let AddTodo = ({ subTodos, createSub, addTodo }) => {
    let input;

    const onSubmit = (e) => {
        e.preventDefault();
        const id = uuid();
        if (!input.value) {
            alert("Please enter a Todo!");
        } else {
            addTodo(id, input.value);
            if (!subTodos[id]) {
                createSub(id);
            }
        }

        input.value = "";
    };

    return (
        <form onSubmit={onSubmit} style={formStyle}>
            <input
                type="text"
                name="title"
                placeholder="Add Todo ..."
                style={inputStyle}
                ref={(node) => {
                    return (input = node);
                }}
            />
            <button type="submit" className="btn" style={submitBtnStyle}>
                Add Todo
            </button>
        </form>
    );
};

const formStyle = {
    display: "flex",
};

const inputStyle = {
    flex: "10",
    padding: "5px",
};

const submitBtnStyle = {
    flex: "1",
    cursor: "pointer",
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (id, text) => dispatch(addTodoAction(id, text)),
        createSub: (id) => dispatch(createSubTodoArrAction(id)),
    };
};

AddTodo = connect(null, mapDispatchToProps)(AddTodo);

export default AddTodo;
