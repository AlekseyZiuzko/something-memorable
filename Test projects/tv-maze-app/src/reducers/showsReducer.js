import {
    GET_ALL_REQUEST,
    GET_ALL_SUCCESS,
    SEARCH_SHOWS_REQUEST,
    SEARCH_SHOWS_SUCCESS,
    ADD_TO_FAVORITES,
    REMOVE_FROM_FAVORITES,
} from "../constants/constants.js";

const initialState = {
    shows: [],
    searchedShows: [],
    favorites: [],
};

const showsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_SUCCESS:
            return {
                ...state,
                shows: [...state.shows, ...payload.data],
            };
        case GET_ALL_REQUEST:
            return {
                ...state,
            };
        case SEARCH_SHOWS_REQUEST:
            return {
                ...state,
            };
        case SEARCH_SHOWS_SUCCESS:
            return {
                ...state,
                searchedShows: payload.data.map((item) => item.show),
            };
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, payload],
            };
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(
                    (shows) => payload !== shows.id
                ),
            };
        default:
            return state;
    }
};

export { showsReducer };
