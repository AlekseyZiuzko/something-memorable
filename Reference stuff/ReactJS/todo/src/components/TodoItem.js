import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

export class TodoItem extends Component {
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
        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        style={{ cursor: "pointer", marginRight: "15px" }}
                        type="checkbox"
                        checked={completed}
                        onChange={this.props.markComplete.bind(this, id)}
                    />
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
                </p>
            </div>
        );
    }
}

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
