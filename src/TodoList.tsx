import { TodoListItem } from './TodoListItem';

export const TodoList = ({ items, handleToggle, handleDelete }: TodoListProps) => {
  return (
    <ul>
      { items.map((item, idx) => (
          <TodoListItem key={idx} {...item} {...{handleToggle, handleDelete}} />
        ))
      }
    </ul>
  )
}