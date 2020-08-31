import React, { Component } from "react";
import { Layout } from "antd";
import {
    addToFavoritesAction,
    getAllShowsAction,
    removeFromFavoritesAction,
} from "../actions/actions";
import { connect } from "react-redux";
import ShowComponent from "./ShowComponent";

class MainContent extends Component {
    componentDidMount() {
        const { shows, getAllShows } = this.props;

        if (!shows.length) {
            getAllShows("/shows");
        }
    }

    render() {
        const { Content } = Layout;
        const {
            addToFavorites,
            favorites,
            removeFromFavorites,
            searchedShows,
            shows,
        } = this.props;

        return (
            <Content style={contentStyle}>
                <div style={siteLayoutContent}>
                    <ShowComponent
                        addToFavorites={addToFavorites}
                        favorites={favorites}
                        removeFromFavorites={removeFromFavorites}
                        searchedShows={searchedShows}
                        shows={shows}
                    />
                </div>
            </Content>
        );
    }
}

const contentStyle = {
    padding: "0 50px",
};

const siteLayoutContent = {
    background: "#fff",
    padding: "24px",
    height: "100%",
};

const mapStateToProps = (state) => {
    const { shows, searchedShows, favorites } = state.shows;

    return {
        shows,
        searchedShows,
        favorites,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllShows: (url) => dispatch(getAllShowsAction(url)),
        addToFavorites: (item) => dispatch(addToFavoritesAction(item)),
        removeFromFavorites: (id) => dispatch(removeFromFavoritesAction(id)),
    };
};

MainContent = connect(mapStateToProps, mapDispatchToProps)(MainContent);

export default MainContent;
