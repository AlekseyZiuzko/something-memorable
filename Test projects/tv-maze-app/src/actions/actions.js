import {
    GET_ALL_FAILED,
    GET_ALL_REQUEST,
    GET_ALL_SUCCESS,
    SEARCH_SHOWS_FAILED,
    SEARCH_SHOWS_REQUEST,
    SEARCH_SHOWS_SUCCESS,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
} from "../constants/constants";
import requestHandler from "../api/requestHandler";

export const getAllShowsAction = (url) => (dispatch) => {
    const types = [GET_ALL_REQUEST, GET_ALL_SUCCESS, GET_ALL_FAILED];
    return requestHandler.getAllShowsAction(url, types, dispatch);
};

export const searchShowsAction = (input) => (dispatch) => {
    const params = {
        input,
    };
    const types = [
        SEARCH_SHOWS_FAILED,
        SEARCH_SHOWS_REQUEST,
        SEARCH_SHOWS_SUCCESS,
    ];

    return requestHandler.searchShows("/search/shows", types, dispatch, params);
};

export const addToFavoritesAction = (item) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: item,
    };
};

export const removeFromFavoritesAction = (id) => {
    return {
        type: REMOVE_FROM_FAVORITES,
        payload: id,
    };
};
