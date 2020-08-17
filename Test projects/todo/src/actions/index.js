import {
    MARK_COMPLETE,
    MARK_COMPLETE_SUBTODO,
    ADD_TODO,
    ADD_SUBTODO,
    EDIT_TODO,
    EDIT_SUBTODO,
    DELETE_TODO,
    DELETE_SUBTODO,
    CREATE_SUBTODO,
} from "../constants/index";

const markCompleteAction = (id, subTodos) => {
    return {
        type: MARK_COMPLETE,
        id,
        subTodos,
    };
};

const addTodoAction = (id, text) => {
    return {
        type: ADD_TODO,
        id,
        text,
    };
};

const editTodoAction = (id, text) => {
    return {
        type: EDIT_TODO,
        id,
        text,
    };
};

const deleteTodoAction = (id, subTodos) => {
    return {
        type: DELETE_TODO,
        id,
        subTodos,
    };
};

const markCompleteSubTodoAciton = (id, parentId) => {
    return {
        type: MARK_COMPLETE_SUBTODO,
        id,
        parentId,
    };
};

const addSubTodoAction = (parentId, text) => {
    return {
        type: ADD_SUBTODO,
        parentId,
        text,
    };
};

const editSubTodoAction = (id, text, parentId) => {
    return {
        type: EDIT_SUBTODO,
        id,
        text,
        parentId,
    };
};

const deleteSubTodoAction = (id, parentId) => {
    return {
        type: DELETE_SUBTODO,
        id,
        parentId,
    };
};
const createSubTodoArrAction = (id) => {
    return {
        type: CREATE_SUBTODO,
        id,
    };
};

export {
    markCompleteAction,
    markCompleteSubTodoAciton,
    addTodoAction,
    addSubTodoAction,
    editTodoAction,
    editSubTodoAction,
    deleteTodoAction,
    deleteSubTodoAction,
    createSubTodoArrAction,
};
