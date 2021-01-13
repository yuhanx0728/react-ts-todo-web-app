import { useState } from 'react';

export const AddTodoForm = ({ handleSubmit }: AddTodoFormProps) => {
  const [input, setInput] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleSubmit(input);
    setInput("");
  };

  return (
    <form>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type="submit" onClick={handleClick}>Add Todo</button>
    </form>
  )
}