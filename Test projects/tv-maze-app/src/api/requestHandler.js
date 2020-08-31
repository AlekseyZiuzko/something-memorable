import axios from "axios";

class requestHandler {
    constructor(baseUrl) {
        this.baseURL = baseUrl;
    }

    getAllShowsAction = (url, types, dispatch) => handle(types, url, dispatch);
    searchShows = (url, types, dispatch, params) =>
        handle(types, url, dispatch, params);
}

export default new requestHandler();

const handle = (types, url, dispatch, params = {}) => {
    let config = {
        params,
    };

    dispatch({
        type: typeByStatus(types, "REQUEST"),
    });
    axios
        .get(`http://api.tvmaze.com${url}`, config)
        .then((response) => {
            dispatch({
                type: typeByStatus(types, "SUCCESS"),
                payload: response,
            });
        })
        .catch(function (error) {
            dispatch({
                type: typeByStatus(types, "FAILED"),
                payload: error,
            });
        });
};

const typeByStatus = (types, status) =>
    types.find((item) => item.includes(status));
