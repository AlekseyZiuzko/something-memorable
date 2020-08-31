import React, { Component } from "react";
import Search from "./Search";

class SearchContainer extends Component {
    constructor(props) {
        super(props);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.onSubmitQuery = this.onSubmitQuery.bind(this);
        this.onSearchAgain = this.onSearchAgain.bind(this);
        this.state = {
            query: "",
            hasSearched: false,
            shows: [],
        };
    }

    handleSearchInput(searchText) {
        this.setState({ query: searchText });
    }

    onSubmitQuery(searchText) {}

    onSearchAgain() {
        this.setState({
            hasSearched: false,
            query: "",
        });
    }

    render() {
        return (
            <div className="SearchContainer" style={searchStyle}>
                <Search
                    handleSearchInput={this.handleSearchInput}
                    onSubmitQuery={this.onSubmitQuery}
                    query={this.state.query}
                />
            </div>
        );
    }
}

const searchStyle = {
    marginBottom: "20px",
};

export default SearchContainer;
