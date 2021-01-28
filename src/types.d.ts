interface TodoListItem {
  id: string;
  text: string;
  completed: boolean;
};

type TodoState = {
  items: TodoListItem[];
};

type TodoAction = {
  type: string;
  item: TodoListItem;
  updatedText?: string;
};

type DispatchType = (args: TodoAction) => TodoAction;