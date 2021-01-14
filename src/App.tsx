import { useReducer } from 'react';
import { TodoList } from './TodoList';
import { CreateTodoForm } from './CreateTodoForm';

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
      ];
    case 'update':
      return todoItems.map(item => {
        if (item.id === action.selectedId) {
          return {
            ...item,
            text: action.text
          }
        }
        return item;
      });
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
};

function App() {
  const [todoItems, dispatch] = useReducer(reducer, initialItems);

  const handleCreate: CreateTodo = (text) => {
    dispatch({ type: "create", text });
  };

  const handleUpdate: UpdateTodo = (selectedId, text) => {
    dispatch({ type: "update", selectedId, text });
  };

  const handleToggle: ToggleTodo = (selectedId) => {
    dispatch({ type: "toggle", selectedId });
  };

  const handleDelete: DeleteTodo = (selectedId) => {
    dispatch({ type: "delete", selectedId });
  };

  return (
    <>
      <TodoList items={todoItems} {...{handleUpdate, handleToggle, handleDelete}} />
      <CreateTodoForm handleCreate={handleCreate} />
    </>
  )
};

export default App;
