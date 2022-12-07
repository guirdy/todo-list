import styles from "./ToDoList.module.css";

interface ToDoProps {
  description: string;
  handleDeleteToDo: (description: string) => void;
}

export function ToDo({description, handleDeleteToDo}: ToDoProps) {
  const handleOnClick = () => {
    handleDeleteToDo(description);
  }
  
  return (
    <button onClick={handleOnClick}>{description}</button>
  );
}
