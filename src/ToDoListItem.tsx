import { useState } from 'react';

type Props = {
  item: TodoListItem;
  handleUpdate: (item: TodoListItem, updatedText: string) => void;
  handleToggle: (item: TodoListItem) => void;
  handleDelete: (item: TodoListItem) => void;
}

export const TodoListItem = ({ 
  item,
  handleToggle,
  handleDelete,
  handleUpdate
}: Props) => {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(item.text);

  return (
    <li>
      <button onClick={() => handleDelete(item)}>x</button>
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
            <button onClick={() => {handleUpdate(item, input); setEditing(false);}}>
              finish editing
            </button>          
          </>
        : <>
            <label style={{ textDecoration: item.completed ? 'line-through' : undefined }}>
              <input 
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggle(item)}
              />
                {item.text}
            </label>
            <button onClick={() => setEditing(true)}>edit</button>
          </>
      }

    </li>
  )
};