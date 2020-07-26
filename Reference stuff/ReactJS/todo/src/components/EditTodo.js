import React, { Component } from "react";

export class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { title: this.props.todo.title };
    }

    handleEdit = (e) => {
        e.preventDefault();
        this.props.editTodo({
            title: this.state.title,
            id: this.props.todo.id,
        });
    };

    handleCancel = (e) => {
        e.preventDefault();
        this.props.cancelEdit();
    };

    onChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    render() {
        return (
            <form style={{ display: "flex" }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: "10", padding: "5px" }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button
                    style={{
                        background: "lightGreen",
                        flex: "1",
                        cursor: "pointer",
                    }}
                    onClick={this.handleEdit}
                >
                    Save
                </button>
                <button
                    style={{
                        background: "#FF6347",
                        flex: "1",
                        cursor: "pointer",
                    }}
                    onClick={this.handleCancel}
                >
                    Cancel
                </button>
            </form>
        );
    }
}

export default EditTodo;
