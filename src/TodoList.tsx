import { TodoListItem } from './TodoListItem';

export const TodoList = ({ items, handleClick }: TodoListProps) => {
  return (
    <ul>
      { items.map((item, idx) => (
          <TodoListItem key={idx} {...item} handleClick={handleClick} />
        ))
      }
    </ul>
  )
}