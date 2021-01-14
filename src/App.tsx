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
    case 'toggle':
      return todoItems.map(item => {
        if (item.id === action.selectedId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      });
    case 'delete':
      return todoItems.filter(
        item => item.id !== action.selectedId);
    default:
      return todoItems;
  }
}

function App() {
  const [todoItems, dispatch] = useReducer(reducer, initialItems);

  const toggleTodo: ToggleTodo = (selectedId) => {
    dispatch({ type: "toggle", selectedId });
  };

  const addTodo: AddTodo = (text) => {
    dispatch({ type: "create", text });
  };

  const deleteTodo: DeleteTodo = (selectedId) => {
    dispatch({ type: "delete", selectedId });
  };

  return (
    <>
      <TodoList items={todoItems} handleToggle={toggleTodo} handleDelete={deleteTodo} />
      <AddTodoForm handleSubmit={addTodo} />
    </>
  )
};

export default App;
