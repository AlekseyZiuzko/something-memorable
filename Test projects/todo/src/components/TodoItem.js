import React, { Component } from "react";
import AddSubTask from "./AddSubTask";
import SubTaskItem from "./SubTaskItem";
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
            addSubTask,
            editSubTask,
            deleteSubTask,
            cancelEdit,
            markCompleteSubTask,
            editing,
        } = this.props;
        const { id, title, completed } = todo;
        const subtasks = subTodos[id];

        return (
            <>
                <div style={this.getStyle()}>
                    <div>
                        <input
                            style={checkboxStyle}
                            type="checkbox"
                            checked={completed}
                            onChange={markComplete.bind(this, id)}
                        />
                        {subtasks && subtasks.length > 0 ? (
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
                            title="Click to add subtask"
                        >
                            Add Subtask
                        </button>
                        <button
                            onClick={setEdit.bind(this, id)}
                            style={editBtnStyle}
                            title="Click to edit"
                        >
                            <FontAwesomeIcon icon={faEdit} size="lg" />
                        </button>
                        <button
                            onClick={deleteTodo.bind(this, id)}
                            style={delBtnStyle}
                            title="Click to delete"
                        >
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                        </button>
                    </div>
                </div>
                {addSubs && (
                    <AddSubTask
                        key={todo.id}
                        todo={todo}
                        addSubTask={addSubTask}
                        cancelAddSub={this.cancelAddSub}
                        parentId={id}
                    />
                )}
                {showSubs
                    ? subtasks.map((subtask) =>
                          editing === subtask.id ? (
                              <EditTodo
                                  key={subtask.id}
                                  todo={subtask}
                                  editSubTask={editSubTask}
                                  cancelEdit={cancelEdit}
                                  showSubs={showSubs}
                                  parentId={id}
                              />
                          ) : (
                              <SubTaskItem
                                  key={subtask.id}
                                  subtask={subtask}
                                  parentId={todo.id}
                                  markComplete={markCompleteSubTask}
                                  deleteSubTask={deleteSubTask}
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
