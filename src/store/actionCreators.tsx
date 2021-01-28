import * as actionTypes from "./actionTypes"

export function createTodo(item: TodoListItem) {
  const action: TodoAction = {
    type: actionTypes.CREATE_TODO,
    item
  }
  return action;
}

export function toggleTodo(item: TodoListItem) {
  const action: TodoAction = {
    type: actionTypes.TOGGLE_TODO,
    item
  }
  return action;
}

export function updateTodo(item: TodoListItem, updatedText: string) {
  const action: TodoAction = {
    type: actionTypes.UPDATE_TODO,
    item,
    updatedText
  }
  return action;
}

export function deleteTodo(item: TodoListItem) {
  const action: TodoAction = {
    type: actionTypes.DELETE_TODO,
    item
  }
  return action;
}