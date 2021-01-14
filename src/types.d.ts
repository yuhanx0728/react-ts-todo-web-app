interface TodoListItem {
  id: number;
  text: string;
  completed: boolean;
};

type ToggleTodo = (selectedId: number) => void;

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

type TodoActionType = CreateAction | CompleteAction;

type CreateAction = { 
  type: 'create';
  text: string;
};

type CompleteAction = {
  type: 'complete';
  selectedId: number;
};