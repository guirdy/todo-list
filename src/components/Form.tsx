import { IoMdAddCircleOutline } from "react-icons/io";

import styles from "./Form.module.css";

export function Form() {
  return (
    <div className={styles.formContainer}>
      <form>
        <input type="text" placeholder="Adicione uma nova tarefa" required />
        <button>
          Criar <IoMdAddCircleOutline size={19} />
        </button>
      </form>
    </div>
  );
}
