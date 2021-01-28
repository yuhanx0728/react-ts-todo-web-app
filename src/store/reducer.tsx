import * as actionTypes from "./actionTypes"
import { v4 as uuidv4 } from 'uuid';

const initialState: TodoState = {
  items: [
    {
      id: uuidv4(),
      text: 'Walk the dog',
      completed: false
    },
    {
      id: uuidv4(),
      text: 'Drink water',
      completed: true
    }
  ]
};

const reducer = (
  state: TodoState = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case actionTypes.CREATE_TODO:
      let newItem: TodoListItem = {
        id: uuidv4(),
        text: action.item.text,
        completed: false
      }
      return {
        ...state,
        items: state.items.concat(newItem),
      };
    case actionTypes.TOGGLE_TODO:
      let toggledItems: TodoListItem[] = state.items.map(item => {
        if (item.id === action.item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      });
      return {
        ...state,
        items: toggledItems
      };
    case actionTypes.UPDATE_TODO:
      let updatedItems: TodoListItem[] = state.items.map(item => {
        if (item.id === action.item.id) {
          return {
            ...item,
            text: action.updatedText ? action.updatedText : item.text
          }
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems
      };
    case actionTypes.DELETE_TODO:
      const items: TodoListItem[] = state.items.filter(
        item => item.id !== action.item.id
      );
      return {
        ...state,
        items
      };
  }
  return state
}

export default reducer