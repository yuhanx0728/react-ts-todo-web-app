import { useCallback } from 'react';
import { TodoList } from './TodoList';
import { CreateTodoForm } from './CreateTodoForm';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { createTodo, toggleTodo, updateTodo, deleteTodo } from './store/actionCreators';

function App() {
  const todoItems: TodoListItem[] = useSelector(
    (state: TodoState) => state.items,
    shallowEqual
  );

  const dispatch = useDispatch();

  const handleCreate = useCallback(
    (item: TodoListItem) => {
      dispatch(createTodo(item));
      console.log(todoItems);
    },
    [dispatch, todoItems]
  );

  const handleToggle = useCallback(
    (item: TodoListItem) => {
      dispatch(toggleTodo(item));
      console.log(todoItems);
    },
    [dispatch, todoItems]
  );

  const handleUpdate = useCallback(
    (item: TodoListItem, updatedText: string) =>{
      dispatch(updateTodo(item, updatedText));
      console.log(todoItems);
    },
    [dispatch, todoItems]
  );

  const handleDelete = useCallback(
    (item: TodoListItem) => {
      dispatch(deleteTodo(item));
      console.log(todoItems);
    },
    [dispatch, todoItems]
  );

  return (
    <>
      <TodoList items={todoItems} {...{handleUpdate, handleToggle, handleDelete}} />
      <CreateTodoForm handleCreate={handleCreate} />
    </>
  )
};

export default App;
