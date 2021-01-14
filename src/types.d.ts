interface TodoListItem {
  id: number;
  text: string;
  completed: boolean;
};

interface TodoListItemProps extends TodoListItem {
  handleToggle: ToggleTodo;
  handleDelete: DeleteTodo;
  handleUpdate: UpdateTodo;
};

interface TodoListProps {
  items: TodoListItem[];
  handleToggle: ToggleTodo;
  handleDelete: DeleteTodo;
  handleUpdate: UpdateTodo;
};

interface CreateTodoFormProps {
  handleCreate: CreateTodo;
};

type CreateTodo = (text: string) => void;

type UpdateTodo = (selectedId: number, text: string) => void;

type ToggleTodo = (selectedId: number) => void;

type DeleteTodo = (selectedId: number) => void;

type TodoActionType = CreateAction | UpdateAction | ToggleAction | DeleteAction;

type CreateAction = { 
  type: 'create';
  text: string;
};

type UpdateAction = {
  type: 'update';
  selectedId: number;
  text: string;
};

type ToggleAction = {
  type: 'toggle';
  selectedId: number;
};

type DeleteAction = {
  type: 'delete';
  selectedId: number;
};
