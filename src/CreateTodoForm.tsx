import { useState, MouseEvent, ChangeEvent } from 'react';

type Props = {
  handleCreate: (item: TodoItem) => void;
};

const initialItem: TodoItem = {
  id: "",
  text: "",
  completed: false
};

export const CreateTodoForm = ({ handleCreate }: Props) => {
  const [newItem, setNewItem] = useState<TodoItem>(initialItem);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewItem({
      ...newItem,
      text: e.target.value
    });
  }

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    handleCreate(newItem);
    setNewItem({
      ...newItem,
      text: ""
    });
  };

  return (
    <form>
      <input type="text" value={newItem.text} onChange={handleChange} />
      <button type="submit" onClick={handleClick}>Add Todo</button>
    </form>
  )
}