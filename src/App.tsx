import { useReducer } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialItems: TodoListItem[] = [
  {
    id: 0,
    text: 'Walk the dog',
    completed: false,
  },
  {
    id: 1,
    text: 'Write app',
    completed: true,
  }
];

function reducer(todoItems: TodoListItem[], action: TodoActionType) {
  switch (action.type) {
    case 'create':
      return [
        ...todoItems, 
        {
          id: todoItems.length,
          text: action.text,
          completed: false
        }
      ];;
    case 'complete':
      return todoItems.map(item => {
        if (item.id === action.selectedId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      });
    default:
      return todoItems;
  }
}

function App() {
  const [todoItems, dispatch] = useReducer(reducer, initialItems);

  const toggleTodo: TodoListItemProps["handleClick"] = (selectedId) => {
    dispatch({ type: "complete", selectedId });
  };

  const addTodo: AddTodo = (text) => {
    dispatch({ type: "create", text });
  };

  return (
    <>
      <TodoList items={todoItems} handleClick={toggleTodo} />
      <AddTodoForm handleSubmit={addTodo} />
    </>
  )
};

export default App;
