import { Title } from "./components/Title";
// import { Card } from "./components/Card";
import { CreateToDo } from "./components/CreateTodo";
import styles from "./app.module.css";
import { Typograph } from "./components/Text";
import styled from "styled-components";
import { Todo } from "./components/Todo";

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
        <WrapperLabelTasks>
          <Typograph spanContent="2" color="secondary">
            Minhas tarefas
          </Typograph>
          <Typograph spanContent="0 de 2">
            Tarefas concluídas
          </Typograph>
        </WrapperLabelTasks>
        

        <Todo />

      </main>
    </>
  );
}

const WrapperLabelTasks = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
`
