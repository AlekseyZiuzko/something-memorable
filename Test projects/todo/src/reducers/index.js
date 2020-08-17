import { combineReducers } from "redux";
import todosReducer from "./todos";
import subTodosReducer from "./subTodos";

const mainReducer = combineReducers({
    todos: todosReducer,
    subTodos: subTodosReducer,
});

export default mainReducer;
