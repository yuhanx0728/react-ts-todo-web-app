export const TodoListItem = ({ id, text, completed, handleClick }: TodoListItemProps) => (
  <li>
    <label
      style={{ textDecoration: completed ? 'line-through' : undefined }}
    >
      <input type="checkbox" checked={completed} onChange={() => handleClick(id)} /> {text}
    </label>
  </li>
)