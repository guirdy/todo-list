import { useState } from "react";
import { BsCircle } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import styles from "./ToDo.module.css";

interface ToDoProps {
  description: string;
  handleTasksCompleted: (isCompleted: boolean) => void;
  handleDeleteToDo: (description: string) => void;
}

export function ToDo({
  description,
  handleTasksCompleted,
  handleDeleteToDo,
}: ToDoProps) {
  const [selected, setSelected] = useState(false);

  const handleOnClickDelete = () => {
    handleDeleteToDo(description);
    handleTasksCompleted(true);
  };

  const handleSelected = () => {
    setSelected(!selected);
    handleTasksCompleted(selected);
  };

  return (
    <div className={styles.content}>
      <button
        className={selected ? styles.checkButton : styles.noCheckButton}
        onClick={handleSelected}
      >
        <div className={styles.checkContent}>
          {selected ? (
            <AiFillCheckCircle className={styles.checkSvg} />
          ) : (
            <BsCircle className={styles.noCheckSvg} />
          )}
          <span className={selected ? styles.checkSpan : styles.noCheckSpan}>
            {description}
          </span>
        </div>
      </button>
      <div className={styles.trashContainer}>
        <button className={styles.trashButton} onClick={handleOnClickDelete}>
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  );
}
