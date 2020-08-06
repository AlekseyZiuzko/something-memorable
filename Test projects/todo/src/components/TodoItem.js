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
    constructor(props) {
        super(props);
        this.state = {
            addSub: false,
            showSubs: false,
        };
    }

    addSub = () => {
        this.setState({ addSub: true });
    };

    cancelAddSub = () => {
        this.setState({ addSub: false });
    };

    showSub = () => {
        this.setState({ showSubs: true });
    };

    hideSub = () => {
        this.setState({ showSubs: false });
    };

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
        };
    };

    render() {
        const { id, title, completed } = this.props.todo;
        const subtasks = this.props.subTodos[id];

        return (
            <>
                <div style={this.getStyle()}>
                    <p>
                        <input
                            style={{ cursor: "pointer", marginRight: "15px" }}
                            type="checkbox"
                            checked={completed}
                            onChange={this.props.markComplete.bind(this, id)}
                        />
                        {subtasks && subtasks.length > 0 ? (
                            this.state.showSubs === false ? (
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
                        <button
                            onClick={this.props.deleteTodo.bind(this, id)}
                            style={delBtnStyle}
                            title="Click to delete"
                        >
                            <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                        </button>
                        <button
                            onClick={this.props.setEdit.bind(this, id)}
                            style={editBtnStyle}
                            title="Click to edit"
                        >
                            <FontAwesomeIcon icon={faEdit} size="lg" />
                        </button>
                        <button
                            className="subBtn"
                            onClick={this.addSub}
                            title="Click to add subtask"
                        >
                            Add Subtask
                        </button>
                    </p>
                </div>
                {this.state.addSub === true ? (
                    <AddSubTask
                        key={this.props.todo.id}
                        todo={this.props.todo}
                        addSubTask={this.props.addSubTask}
                        cancelAddSub={this.cancelAddSub}
                        parentId={id}
                    />
                ) : null}
                {this.state.showSubs === true
                    ? subtasks.map((subtask) =>
                          this.props.editing === subtask.id ? (
                              <EditTodo
                                  key={subtask.id}
                                  todo={subtask}
                                  editSubTask={this.props.editSubTask}
                                  cancelEdit={this.props.cancelEdit}
                                  showSubs={this.state.showSubs}
                                  parentId={id}
                              />
                          ) : (
                              <SubTaskItem
                                  key={subtask.id}
                                  subtask={subtask}
                                  parentId={this.props.todo.id}
                                  markComplete={this.props.markCompleteSubTask}
                                  deleteSubTask={this.props.deleteSubTask}
                                  setEdit={this.props.setEdit}
                              />
                          )
                      )
                    : null}
            </>
        );
    }
}

const showSubBtnStyle = {
    border: "none",
    marginRight: "10px",
    cursor: "pointer",
};

const delBtnStyle = {
    color: "red",
    border: "none",
    cursor: "pointer",
    float: "right",
};

const editBtnStyle = {
    cursor: "pointer",
    float: "right",
    marginRight: "10px",
    border: "none",
};

export default TodoItem;
