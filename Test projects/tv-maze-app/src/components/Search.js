import React, { Component } from "react";
import { Input, Tooltip } from "antd";

class Search extends Component {
    constructor(props) {
        super(props);
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.onSubmitQuery = this.onSubmitQuery.bind(this);
    }

    handleSearchInput(e) {
        this.props.handleSearchInput(e.target.value);
    }

    onSubmitQuery() {
        this.props.onSubmitQuery(this.props.query);
    }

    render() {
        const { Search } = Input;
        return (
            <div className="Search">
                <Tooltip
                    trigger={["focus"]}
                    placement="bottomLeft"
                    title="Enter a show name..."
                >
                    <Search
                        placeholder="Enter a show name..."
                        value={this.props.query}
                        onChange={this.handleSearchInput}
                        onSearch={this.onSubmitQuery}
                        enterButton="Search"
                        size="large"
                    />
                </Tooltip>
            </div>
        );
    }
}

export default Search;
