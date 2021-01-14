import { useReducer } from 'react';
import { TodoList } from './TodoList';
import { CreateTodoForm } from './CreateTodoForm';
import { initialItems, reducer } from './TodoReducer';

function App() {
  const [todoItems, dispatch] = useReducer(reducer, initialItems);

  const handleCreate: CreateTodo = (text) => {
    dispatch({ type: 'create', text });
  };

  const handleUpdate: UpdateTodo = (selectedId, text) => {
    dispatch({ type: 'update', selectedId, text });
  };

  const handleToggle: ToggleTodo = (selectedId) => {
    dispatch({ type: 'toggle', selectedId });
  };

  const handleDelete: DeleteTodo = (selectedId) => {
    dispatch({ type: 'delete', selectedId });
  };

  return (
    <>
      <TodoList items={todoItems} {...{handleUpdate, handleToggle, handleDelete}} />
      <CreateTodoForm handleCreate={handleCreate} />
    </>
  )
};

export default App;
