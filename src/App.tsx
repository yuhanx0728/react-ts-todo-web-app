import { useCallback } from 'react';
import { TodoList } from './TodoList';
import { CreateTodoForm } from './CreateTodoForm';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { createTodo, toggleTodo, updateTodo, deleteTodo } from './store/actionCreators';

function App() {
  const todoItems: TodoItem[] = useSelector(
    (state: TodoState) => state.items,
    shallowEqual
  );

  // https://react-redux.js.org/api/hooks#usedispatch
  // on why use useCallback
  const dispatch = useDispatch();

  const handleCreate = useCallback(
    (item) => dispatch(createTodo(item)),
    [dispatch]
  );

  const handleToggle = useCallback(
    (item) => dispatch(toggleTodo(item)),
    [dispatch]
  );

  const handleUpdate = useCallback(
    (item, updatedText) => dispatch(updateTodo(item, updatedText)),
    [dispatch]
  );

  const handleDelete = useCallback(
    (item) => dispatch(deleteTodo(item)),
    [dispatch]
  );

  return (
    <>
      <TodoList items={todoItems} {...{handleUpdate, handleToggle, handleDelete}} />
      <CreateTodoForm handleCreate={handleCreate} />
    </>
  )
};

export default App;
