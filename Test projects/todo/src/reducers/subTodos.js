import uuid from "react-uuid";
import {
    MARK_COMPLETE_SUBTODO,
    ADD_SUBTODO,
    EDIT_SUBTODO,
    DELETE_SUBTODO,
    CREATE_SUBTODO,
} from "../constants/index";

const handleMarkComplete = (state, action) => {
    const temp = { ...state };

    temp[action.parentId] = temp[action.parentId].map((subtodo) => {
        if (subtodo.id === action.id) {
            subtodo.completed = !subtodo.completed;
        }
        return subtodo;
    });

    return temp;
};

const handleAdd = (state, action) => {
    const temp = { ...state };

    temp[action.parentId] = [
        ...temp[action.parentId],
        {
            id: uuid(),
            title: action.text,
            completed: false,
        },
    ];

    return temp;
};

const handleEdit = (state, action) => {
    const temp = { ...state };
    temp[action.parentId] = temp[action.parentId].map((item) =>
        item.id === action.id ? { ...item, title: action.text } : item
    );

    state = temp;
    return state;
};

const handleDelete = (state, action) => {
    const temp = { ...state };
    temp[action.parentId] = temp[action.parentId].filter(
        (item) => item.id !== action.id
    );
    state = temp;
    return state;
};

const handleCreate = (state, action) => {
    const tempSub = { [action.id]: [] };
    return { ...state, ...tempSub };
};

const subTodosReducer = (state = {}, action) => {
    switch (action.type) {
        case MARK_COMPLETE_SUBTODO:
            return handleMarkComplete(state, action);
        case ADD_SUBTODO:
            return handleAdd(state, action);
        case EDIT_SUBTODO:
            return handleEdit(state, action);
        case DELETE_SUBTODO:
            return handleDelete(state, action);
        case CREATE_SUBTODO:
            return handleCreate(state, action);

        default:
            return state;
    }
};

export default subTodosReducer;
