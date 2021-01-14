import { TodoListItem } from './TodoListItem';

export const TodoList = ({ items, handleUpdate, handleToggle, handleDelete }: TodoListProps) => {
  return (
    <ul>
      { items.map((item, idx) => (
          <TodoListItem key={idx} {...item} {...{handleUpdate, handleToggle, handleDelete}} />
        ))
      }
    </ul>
  )
}