import { PlusCircleIcon } from "lucide-react";
import styles from "./style.module.css";

export function CreateToDo() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Adicione uma nova tarefa " />

      <button>
        <PlusCircleIcon size={20} />
        Criar
      </button>
    </div>
  );
}
