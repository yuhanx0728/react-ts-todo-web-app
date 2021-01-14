interface TodoListItem {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoListItemProps extends TodoListItem {
  handleToggle: ToggleTodo;
  handleDelete: DeleteTodo;
};

interface TodoListProps {
  items: TodoListItem[];
  handleToggle: ToggleTodo;
  handleDelete: DeleteTodo;
};

interface AddTodoFormProps {
  handleSubmit: AddTodo;
};

type ToggleTodo = (selectedId: number) => void;

type AddTodo = (text: string) => void;

type DeleteTodo = (selectedId: number) => void;

type TodoActionType = CreateAction | ToggleAction | DeleteAction;

type CreateAction = { 
  type: 'create';
  text: string;
};

type ToggleAction = {
  type: 'toggle';
  selectedId: number;
};

type DeleteAction = {
  type: 'delete';
  selectedId: number;
}