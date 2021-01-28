import { TodoListItem } from './TodoListItem';

type Props = {
  items: TodoListItem[];
  handleUpdate: (item: TodoListItem, updatedText: string) => void;
  handleToggle: (item: TodoListItem) => void;
  handleDelete: (item: TodoListItem) => void;
}

export const TodoList = ({ items, handleUpdate, handleToggle, handleDelete }: Props) => {
  return (
    <ul>
      { items.map((item, idx) => (
          <TodoListItem key={idx} {...{item, handleUpdate, handleToggle, handleDelete}} />
        ))
      }
    </ul>
  )
}