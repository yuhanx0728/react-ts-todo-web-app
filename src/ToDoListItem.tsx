import { useState } from 'react';

export const TodoListItem = ({ 
  id,
  text,
  completed,
  handleToggle,
  handleDelete,
  handleUpdate
}: TodoListItemProps) => {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(text);

  return (
    <li>
      <button onClick={() => handleDelete(id)}>x</button>
      {
        editing
        ? <>
            <label>
              <input 
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
              />
            </label>
            <button onClick={() => {handleUpdate(id, input); setEditing(false);}}>
              finish editing
            </button>          
          </>
        : <>
            <label style={{ textDecoration: completed ? 'line-through' : undefined }}>
              <input 
                type="checkbox"
                checked={completed}
                onChange={() => handleToggle(id)}
              />
                {text}
            </label>
            <button onClick={() => setEditing(true)}>edit</button>
          </>
      }

    </li>
  )
};