import React, { Component } from "react";

export class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { title: props.todo.title };
    }

    handleEdit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        const {
            parentId,
            editSubTodo,
            editTodo,
            todo,
            cancelEdit,
        } = this.props;
        if (parentId) {
            editSubTodo(
                todo.id,
                title,

                parentId
            );
            cancelEdit();
        } else {
            editTodo(todo.id, title);
            cancelEdit();
        }
    };

    handleCancel = (e) => {
        e.preventDefault();
        const { cancelEdit } = this.props;
        cancelEdit();
    };

    onChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    render() {
        const { title } = this.state;
        return (
            <form style={formStyle}>
                <input
                    type="text"
                    name="title"
                    style={titleStyle}
                    value={title}
                    onChange={this.onChange}
                />
                <button block style={editStyle} onClick={this.handleEdit}>
                    Save
                </button>
                <button style={cancelStyle} onClick={this.handleCancel}>
                    Cancel
                </button>
            </form>
        );
    }
}

const formStyle = {
    display: "flex",
};

const titleStyle = {
    flex: "10",
    padding: "5px",
};

const editStyle = {
    background: "lightGreen",
    flex: "1",
    cursor: "pointer",
};

const cancelStyle = {
    background: "#FF6347",
    flex: "1",
    cursor: "pointer",
};

export default EditTodo;
