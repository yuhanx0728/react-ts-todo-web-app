interface TodoListItem {
  id: number;
  text: string;
  completed: boolean;
};

type ToggleTodo = (itemId: number) => void;

interface TodoListItemProps extends TodoListItem {
  handleClick: ToggleTodo;
};

interface TodoListProps {
  items: TodoListItem[];
  handleClick: ToggleTodo;
};

type AddTodo = (text: string) => void;

interface AddTodoFormProps {
  handleSubmit: AddTodo;
};