import { ToDo } from "./ToDo";
import Clipboard from "../assets/todo-icon.svg";
import styles from "./ToDoComponent.module.css";

interface ToDoComponentProps {
  toDoList: string[];
  setToDoList: (text: string[]) => void;
}

export function TodoComponent({ toDoList, setToDoList }: ToDoComponentProps) {
  const handleDeleteToDo = (deletedToDo: string) => {
    const updateToDo = toDoList.filter((toDo: string) => toDo !== deletedToDo);
    setToDoList(updateToDo);
  };

  return (
    <div className={styles.toDoComponentContainer}>
      <div className={styles.status}>
        <h1>
          Tarefas criadas <span>0</span>
        </h1>
        <h1>
          Concluídas <span>2 de 5</span>
        </h1>
      </div>

      {toDoList.length ? (
        <div className={styles.toDoList}>
          {toDoList.map((description) => (
            <ToDo
              key={description}
              description={description}
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
