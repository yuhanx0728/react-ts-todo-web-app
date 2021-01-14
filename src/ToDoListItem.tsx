export const TodoListItem = ({ id, text, completed, handleToggle, handleDelete }: TodoListItemProps) => (
  <li>
    <button onClick={() => handleDelete(id)}>x</button>
    <label
      style={{ textDecoration: completed ? 'line-through' : undefined }}
    >
      <input type="checkbox" checked={completed} onChange={() => handleToggle(id)} /> {text}
    </label>
  </li>
)