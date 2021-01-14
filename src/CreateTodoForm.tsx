import { useState, MouseEvent } from 'react';

export const CreateTodoForm = ({ handleCreate }: CreateTodoFormProps) => {
  const [input, setInput] = useState<string>("");

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    handleCreate(input);
    setInput("");
  };

  return (
    <form>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit" onClick={handleClick}>Add Todo</button>
    </form>
  )
}