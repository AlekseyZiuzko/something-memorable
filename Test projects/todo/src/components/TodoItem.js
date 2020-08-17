import React, { Component } from "react";
import AddSubTodo from "./AddSubTodo";
import SubTodoItem from "./SubTodoItem";
import EditTodo from "./EditTodo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

export class TodoItem extends Component {
    state = {
        addSubs: false,
        showSubs: false,
    };

    addSub = () => {
        this.setState({ addSubs: true });
    };

    cancelAddSub = () => {
        this.setState({ addSubs: false });
    };

    showSub = () => {
        this.setState({ showSubs: true });
    };

    hideSub = () => {
        this.setState({ showSubs: false });
    };

    getStyle = () => {
        const { todo } = this.props;
        return {
            display: "flex",
            justifyContent: "space-between",
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: todo.completed ? "line-through" : "none",
        };
    };

    render() {
        const { addSubs, showSubs } = this.state;
        const {
            todo,
            subTodos,
            markComplete,
            setEdit,
            deleteTodo,
            addSubTodo,
            editSubTodo,
            deleteSubTodo,
            cancelEdit,
            markCompleteSubTodo,
            editing,
        } = this.props;
        const { id, title, completed } = todo;
        const subtodos = subTodos[id];

        return (
            <>
                <div style={this.getStyle()}>
                    <div>
                        <input
                            style={checkboxStyle}
                            type="checkbox"
                            checked={completed}
                            onChange={markComplete.bind(this, id, subTodos)}
                        />
                        {subtodos && subtodos.length > 0 ? (
                            !showSubs ? (
                                <button
                                    style={showSubBtnStyle}
                                    onClick={this.showSub}
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            ) : (
                                <button
                                    style={showSubBtnStyle}
                                    onClick={this.hideSub}
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                            )
                        ) : null}
                        {title}
                    </div>
                    <div>
                        <button
                            className="subBtn"
                            onClick={this.addSub}
                            title="Click to add subtodo"
                        >
                            Add Subtodo
                        </button>
                        <button
                            onClick={setEdit.bind(this, id)}
                            style={editBtnStyle}
                            title="Click to edit"
                        >
                            <FontAwesomeIcon icon={faEdit} size="lg" />
                        </button>
                        <button
                            onClick={deleteTodo.bind(this, id, subTodos)}
                            style={delBtnStyle}
                            title="Click to delete"
                        >
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                        </button>
                    </div>
                </div>
                {addSubs && (
                    <AddSubTodo
                        key={todo.id}
                        todo={todo}
                        addSubTodo={addSubTodo}
                        cancelAddSub={this.cancelAddSub}
                        parentId={id}
                    />
                )}
                {showSubs
                    ? subtodos.map((subtodo) =>
                          editing === subtodo.id ? (
                              <EditTodo
                                  key={subtodo.id}
                                  todo={subtodo}
                                  editSubTodo={editSubTodo}
                                  cancelEdit={cancelEdit}
                                  showSubs={showSubs}
                                  parentId={id}
                              />
                          ) : (
                              <SubTodoItem
                                  key={subtodo.id}
                                  subtodo={subtodo}
                                  parentId={todo.id}
                                  markComplete={markCompleteSubTodo}
                                  deleteSubTodo={deleteSubTodo}
                                  setEdit={setEdit}
                              />
                          )
                      )
                    : null}
            </>
        );
    }
}

const checkboxStyle = {
    cursor: "pointer",
    marginRight: "15px",
};

const showSubBtnStyle = {
    border: "none",
    marginRight: "10px",
    cursor: "pointer",
};

const delBtnStyle = {
    color: "red",
    border: "none",
    cursor: "pointer",
};

const editBtnStyle = {
    cursor: "pointer",

    marginRight: "10px",
    border: "none",
};

export default TodoItem;
