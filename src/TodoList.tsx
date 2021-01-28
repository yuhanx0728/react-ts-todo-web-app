import { TodoItem } from './TodoItem';

type Props = {
  items: TodoItem[];
  handleUpdate: (item: TodoItem, updatedText: string) => void;
  handleToggle: (item: TodoItem) => void;
  handleDelete: (item: TodoItem) => void;
}

export const TodoList = ({ items, handleUpdate, handleToggle, handleDelete }: Props) => {
  return (
    <ul>
      { items.map((item, idx) => (
          <TodoItem key={idx} {...{item, handleUpdate, handleToggle, handleDelete}} />
        ))
      }
    </ul>
  )
}