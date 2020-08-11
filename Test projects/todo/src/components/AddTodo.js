import React, { Component } from "react";

export class AddTodo extends Component {
    state = {
        title: "",
    };

    onChange = (e) => this.setState({ title: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { title } = this.state;
        const { addTodo } = this.props;
        !title ? alert("Please enter a Todo!") : addTodo(title);

        this.setState({ title: "" });
    };

    render() {
        const { title } = this.state;
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo ..."
                    style={inputStyle}
                    value={title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Add Todo"
                    className="btn"
                    style={submitBtnStyle}
                />
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

const submitBtnStyle = {
    flex: "1",
    cursor: "pointer",
};

export default AddTodo;
