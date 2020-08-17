import {
    MARK_COMPLETE,
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
} from "../constants/index";

const handleMarkComplete = (state, action) => {
    return state.map((item) => {
        if (item.id === action.id) {
            item.completed = !item.completed;
            action.subTodos[item.id].forEach((subTodo) => {
                subTodo.completed = item.completed;
            });
        }
        return item;
    });
};

const handleAdd = (state, action) => {
    return [
        ...state,
        {
            id: action.id,
            title: action.text,
            completed: false,
        },
    ];
};

const handleEdit = (state, action) => {
    return state.map((item) =>
        item.id === action.id ? (item = { ...item, title: action.text }) : item
    );
};

const handleDelete = (state, action) => {
    delete action.subTodos[action.id];
    return state.filter((item) => item.id !== action.id);
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case MARK_COMPLETE:
            return handleMarkComplete(state, action);
        case ADD_TODO:
            return handleAdd(state, action);
        case EDIT_TODO:
            return handleEdit(state, action);
        case DELETE_TODO:
            return handleDelete(state, action);
        default:
            return state;
    }
};

export default todosReducer;
