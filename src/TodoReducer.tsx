export const initialItems: TodoListItem[] = [
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

export function reducer(todoItems: TodoListItem[], action: TodoActionType) {
  switch (action.type) {
    case 'create':
      return [
        ...todoItems, 
        {
          id: todoItems.length,
          text: action.text,
          completed: false
        }
      ];
    case 'update':
      return todoItems.map(item => {
        if (item.id === action.selectedId) {
          return {
            ...item,
            text: action.text
          }
        }
        return item;
      });
    case 'toggle':
      return todoItems.map(item => {
        if (item.id === action.selectedId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      });
    case 'delete':
      return todoItems.filter(
        item => item.id !== action.selectedId);
    default:
      return todoItems;
  }
};
