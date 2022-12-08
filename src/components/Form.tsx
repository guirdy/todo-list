import { useState, FormEvent } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoComponent } from "./TodoComponent";

import styles from "./Form.module.css";

export function Form() {
  const [toDoList, setToDoList] = useState<string[]>([]);
  const [inputText, setInputText] = useState("");

  const handleCreateNewToDo = (
    event: FormEvent<HTMLFormElement>,
    text: string
  ) => {
    event.preventDefault();
    setToDoList([...toDoList, text]);
    setInputText("");
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={(event) => handleCreateNewToDo(event, inputText)}>
          <input
            id="toDoDescription"
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={inputText}
            required
            onChange={(e) => setInputText(e.target.value)}
          />
          <button>
            Criar <IoMdAddCircleOutline size={19} />
          </button>
        </form>
      </div>
      <TodoComponent toDoList={toDoList} setToDoList={setToDoList} />
    </>
  );
}
