import * as actionTypes from "./actionTypes"

export function createTodo(item: TodoItem) {
  const action: TodoAction = {
    type: actionTypes.CREATE_TODO,
    item
  }
  return asyncWrapper(action);
}

export function toggleTodo(item: TodoItem) {
  const action: TodoAction = {
    type: actionTypes.TOGGLE_TODO,
    item
  }
  return action;
}

export function updateTodo(item: TodoItem, updatedText: string) {
  const action: TodoAction = {
    type: actionTypes.UPDATE_TODO,
    item,
    updatedText
  }
  return action;
}

export function deleteTodo(item: TodoItem) {
  const action: TodoAction = {
    type: actionTypes.DELETE_TODO,
    item
  }
  return asyncWrapper(action);
}

const asyncWrapper = (action: TodoAction) => {
  return (dispatch: DispatchType) =>
    setTimeout(() => {
      dispatch(action);
    }, 500);
};