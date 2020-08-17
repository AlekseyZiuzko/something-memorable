import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

export class SubTodoItem extends Component {
    getStyle = () => {
        return {
            display: "flex",
            justifyContent: "space-between",
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.subtodo.completed
                ? "line-through"
                : "none",
        };
    };

    handleMarkComplete = () => {
        const { markComplete, subtodo, parentId } = this.props;
        markComplete(subtodo.id, parentId);
    };

    handleDelete = () => {
        const { deleteSubTodo, subtodo, parentId } = this.props;
        deleteSubTodo(subtodo.id, parentId);
    };

    render() {
        const { subtodo, setEdit } = this.props;
        const { id, title, completed } = subtodo;

        return (
            <div style={this.getStyle()}>
                <div>
                    <input
                        style={checkboxStyle}
                        type="checkbox"
                        checked={completed}
                        onChange={this.handleMarkComplete}
                    />

                    {title}
                </div>
                <div>
                    <button
                        onClick={setEdit.bind(this, id)}
                        style={editBtnStyle}
                        title="Click to edit"
                    >
                        <FontAwesomeIcon icon={faEdit} size="lg" />
                    </button>
                    <button
                        onClick={this.handleDelete}
                        style={delBtnStyle}
                        title="Click to delete"
                    >
                        <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                    </button>
                </div>
            </div>
        );
    }
}

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

const checkboxStyle = {
    cursor: "pointer",
    margin: "0 15px 0 27px",
};

export default SubTodoItem;
