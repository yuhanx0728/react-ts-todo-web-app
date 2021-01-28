interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
};

type TodoState = {
  items: TodoItem[];
};

type TodoAction = {
  type: string;
  item: TodoItem;
  updatedText?: string;
};

type DispatchType = (args: TodoAction) => TodoAction;