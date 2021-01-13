import { useState } from 'react';
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

function App() {
  const [todoItems, setTodoItems] = useState<TodoListItem[]>(initialItems);

  const toggleTodo: TodoListItemProps["handleClick"] = (selectedItemId) => {
    let newTodoItems = todoItems.map(item => {
      if (item.id === selectedItemId) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    })
    setTodoItems(newTodoItems);
  };

  const addTodo: AddTodo = (text) => {
    console.log("here")
    let newTodoItems = [
      ...todoItems, 
      {
        id: todoItems.length,
        text,
        completed: false
      }
    ];
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <TodoList items={todoItems} handleClick={toggleTodo} />
      <AddTodoForm handleSubmit={addTodo}/>
    </>
  )
};

export default App;
