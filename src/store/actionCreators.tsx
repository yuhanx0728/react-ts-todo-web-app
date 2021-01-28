import * as actionTypes from "./actionTypes"

export function CreateTodo(todo: TodoListItem) {
  const action: TodoAction = {
    type: actionTypes.CREATE_TODO,
    article: todo
  }
  return simulateHttpRequest(action)
}

export function removeArticle(todo: TodoListItem) {
  const action: TodoAction = {
    type: actionTypes.DELETE_TODO,
    article: todo
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: TodoAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}