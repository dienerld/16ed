import styles from "./style.module.css";

interface TitleProps {
  content: string;
}

export function Title({ content }: TitleProps) {
  return <h1 className={styles.Title}>{content}</h1>;
}
