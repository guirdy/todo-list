import { ToDo } from "./ToDo";
import Clipboard from "../assets/todo-icon.svg";
import styles from "./ToDoComponent.module.css";
import { useState } from "react";

interface ToDoComponentProps {
  toDoList: string[];
  setToDoList: (text: string[]) => void;
}

export function TodoComponent({ toDoList, setToDoList }: ToDoComponentProps) {
  const [completeCount, setCompleteCount] = useState(0);

  const handleDeleteToDo = (deletedToDo: string) => {
    const updateToDo = toDoList.filter((toDo: string) => toDo !== deletedToDo);
    setToDoList(updateToDo);
  };

  const handleTasksCompleted = (isComplete: boolean) => {
    if (!isComplete) {
      if (toDoList.length < completeCount) {
        setCompleteCount(Number(toDoList.length));
        return;
      }
      setCompleteCount((count) => {
        return count + 1;
      });
      return;
    }

    setCompleteCount((count) => {
      if (count > 0) {
        return count - 1;
      }
      return 0;
    });
  }

  return (
    <div className={styles.toDoComponentContainer}>
      <div className={styles.status}>
        <h1>
          Tarefas criadas <span>{toDoList.length}</span>
        </h1>
        <h1>
          Concluídas <span>{completeCount} de {toDoList.length}</span>
        </h1>
      </div>

      {toDoList.length ? (
        <div className={styles.toDoList}>
          {toDoList.map((description) => (
            <ToDo
              key={description}
              description={description}
              handleTasksCompleted={handleTasksCompleted}
              handleDeleteToDo={handleDeleteToDo}
            />
          ))}
        </div>
      ) : (
        <div className={styles.toDoListEmpty}>
          <img src={Clipboard} alt="clipboard" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      )}
    </div>
  );
}
