import React, { Component } from "react";
import ShowComponent from "./ShowComponent";
import {
    addToFavoritesAction,
    removeFromFavoritesAction,
} from "../actions/actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "antd";

class FavoritesPage extends Component {
    render() {
        const { favorites } = this.props;
        return (
            <>
                {favorites.length ? (
                    <ShowComponent shows={favorites} />
                ) : (
                    <Button type="primary">
                        <Link to="/">Return to Home Page</Link>
                    </Button>
                )}
            </>
        );
    }
}

const MapStateToProps = (state) => {
    const { favorites } = state.shows;
    return {
        favorites,
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        addToFavorites: (item) => dispatch(addToFavoritesAction(item)),
        removeFromFavorites: (item) =>
            dispatch(removeFromFavoritesAction(item)),
    };
};

FavoritesPage = connect(MapStateToProps, MapDispatchToProps)(FavoritesPage);

export default FavoritesPage;
