import React, { Component } from "react";

export class AddSubTask extends Component {
    state = { title: "" };

    handleAdd = (e) => {
        e.preventDefault();
        const { title } = this.state;
        const { todo, cancelAddSub, addSubTask } = this.props;
        !title ? alert("Please enter a Todo!") : addSubTask(title, todo.id);
        cancelAddSub();
    };

    handleCancel = (e) => {
        e.preventDefault();
        const { cancelAddSub } = this.props;
        cancelAddSub();
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
                    style={inputStyle}
                    placeholder="Add Todo ..."
                    value={title}
                    onChange={this.onChange}
                />
                <button style={saveBtnStyle} onClick={this.handleAdd}>
                    Save Subtask
                </button>
                <button style={cancelBtnStyle} onClick={this.handleCancel}>
                    Cancel
                </button>
            </form>
        );
    }
}

const formStyle = {
    display: "flex",
};

const inputStyle = {
    flex: "10",
    padding: "5px",
};

const saveBtnStyle = {
    background: "lightGreen",
    flex: "1",
    cursor: "pointer",
};

const cancelBtnStyle = {
    background: "#FF6347",
    flex: "1",
    cursor: "pointer",
};

export default AddSubTask;
