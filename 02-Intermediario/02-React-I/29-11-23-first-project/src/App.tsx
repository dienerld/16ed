import { Title } from "./components/Title";
import { Card } from "./components/Card";
import { CreateToDo } from "./components/CreateTodo";
import styles from "./app.module.css";

export function App() {
  return (
    <>
      <header className={styles.containerHeader}>
        <img
          src="https://react-todo.dienerld.dev/src/assets/rocket.svg"
          alt="Icone foguete."
        />

        <Title content="to" />
        <Title content="do" />
      </header>

      <main className={styles.containerMain}>
        <CreateToDo />
      </main>
    </>
  );
}
