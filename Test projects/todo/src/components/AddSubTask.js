import React, { Component } from "react";

export class AddSubTask extends Component {
    constructor(props) {
        super(props);
        this.state = { title: "" };
    }

    handleAdd = (e) => {
        e.preventDefault();
        this.state.title === ""
            ? alert("Please enter a Todo!")
            : this.props.addSubTask(this.state.title, this.props.todo.id);
        this.props.cancelAddSub();
    };

    handleCancel = (e) => {
        e.preventDefault();
        this.props.cancelAddSub();
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
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <button
                    style={{
                        background: "lightGreen",
                        flex: "1",
                        cursor: "pointer",
                    }}
                    onClick={this.handleAdd}
                >
                    Save Subtask
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

export default AddSubTask;
